import { codes } from "./codes.js";

const vinculaciones = {}; // auth -> Discord ID (puedes guardar en BD)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { code, discordId, discordUsername } = req.body;

  if (!code || !discordId || !discordUsername) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const vinculo = codes[code];
  if (!vinculo) {
    return res.status(400).json({ error: "Código inválido o expirado" });
  }

  vinculaciones[vinculo.auth] = {
    discordId,
    discordUsername,
    nick: vinculo.nombre,
    fecha: Date.now()
  };

  delete codes[code];

  return res.status(200).json({
    success: true,
    data: {
      auth: vinculo.auth,
      nick: vinculo.nombre,
      discordId,
      discordUsername
    }
  });
}
