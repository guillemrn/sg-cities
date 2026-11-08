export default async function handler(request, response) {
  if (request.method !== "POST")
    return response.status(405).json({ error: "Método no permitido" });

  const payload = request.body || {};
  if (payload.website) return response.status(200).json({ ok: true });
  if (!process.env.MAKE_WEBHOOK_URL)
    return response.status(503).json({ error: "Webhook no configurado" });

  try {
    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "sg-cities.com",
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
