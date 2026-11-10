const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_BODY_BYTES = 16 * 1024;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_FORM_AGE_MS = 3000;
const MAKE_TIMEOUT_MS = 8000;

// Best-effort limiter for serverless instances. A durable limiter should be
// added at the edge (Vercel WAF/Upstash) when traffic grows significantly.
const requestsByIp = new Map();

const isEmail = (value) =>
  typeof value === "string" && EMAIL_PATTERN.test(value.trim());

const text = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

// Evita inyección de fórmulas en Google Sheets / CSV: un texto que empieza con
// = + - @ (o tab/retorno) se guarda como texto anteponiendo un apóstrofo.
const sheetSafe = (value) => (/^[=+\-@\t\r]/.test(value) ? `'${value}` : value);

const getClientIp = (request) => {
  const forwarded = request.headers["x-forwarded-for"];
  return (
    forwarded
      ? forwarded.split(",")[0]
      : request.headers["x-real-ip"] || "unknown"
  ).trim();
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter(
    (time) => now - time < WINDOW_MS,
  );
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestsByIp.set(ip, recent);

  if (requestsByIp.size > 1000) {
    for (const [key, times] of requestsByIp) {
      if (!times.some((time) => now - time < WINDOW_MS))
        requestsByIp.delete(key);
    }
  }
  return false;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Método no permitido" });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return response.status(413).json({ error: "Solicitud demasiado grande" });
  }

  const body =
    request.body && typeof request.body === "object" ? request.body : {};
  const { website, t } = body;

  // Keep the honeypot response indistinguishable from a successful request.
  if (text(website, 200)) return response.status(200).json({ ok: true });

  // Solo se descartan envíos demasiado rápidos (bots). Un formulario abierto
  // por mucho tiempo es una persona real y nunca se rechaza.
  const openedAt = Number(t);
  if (!Number.isSafeInteger(openedAt)) {
    return response
      .status(400)
      .json({ error: "No fue posible validar la solicitud" });
  }
  if (Date.now() - openedAt < MIN_FORM_AGE_MS) {
    return response.status(200).json({ ok: true });
  }

  if (isRateLimited(getClientIp(request))) {
    response.setHeader("Retry-After", String(Math.ceil(WINDOW_MS / 1000)));
    return response
      .status(429)
      .json({ error: "Demasiadas solicitudes. Intenta más tarde." });
  }

  const nombre = text(body.nombre, 120);
  const email = text(body.email, 254).toLowerCase();
  const area = text(body.area, 120);
  const mensaje = text(body.mensaje, 2000);
  const origen = text(body.origen, 500);

  if (!nombre || !isEmail(email) || !mensaje) {
    return response.status(400).json({ error: "Datos incompletos" });
  }
  if (!process.env.MAKE_WEBHOOK_URL) {
    return response.status(503).json({ error: "Webhook no configurado" });
  }

  try {
    const headers = { "content-type": "application/json" };
    // Secreto compartido: Make solo acepta leads que traen este header.
    if (process.env.MAKE_WEBHOOK_SECRET)
      headers["x-sgc-secret"] = process.env.MAKE_WEBHOOK_SECRET;

    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(MAKE_TIMEOUT_MS),
      body: JSON.stringify({
        nombre: sheetSafe(nombre),
        email: sheetSafe(email),
        area: sheetSafe(area),
        mensaje: sheetSafe(mensaje),
        origen: sheetSafe(origen),
        source: "sgcities.com",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!makeResponse.ok) throw new Error("Make webhook failed");
    return response.status(200).json({ ok: true });
  } catch {
    return response
      .status(502)
      .json({ error: "No fue posible enviar la solicitud" });
  }
}
