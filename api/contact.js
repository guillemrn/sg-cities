const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default async function handler(request, response) {
  if (request.method !== "POST")
    return response.status(405).json({ error: "Método no permitido" });

  const { website, t, ...payload } = request.body || {};

  // Anti-spam: campo trampa y envíos hechos en menos de 3 segundos (bots)
  if (website) return response.status(200).json({ ok: true });
  if (t && Date.now() - Number(t) < 3000) return response.status(200).json({ ok: true });

  if (!payload.nombre?.trim() || !isEmail(payload.email))
    return response.status(400).json({ error: "Datos incompletos" });
  if (!process.env.MAKE_WEBHOOK_URL)
    return response.status(503).json({ error: "Webhook no configurado" });

  try {
    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...payload,
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
