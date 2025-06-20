// cards.js - Obtener carta por auth o Discord ID
export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Falta id" });

  const fs = require("fs");
  const data = JSON.parse(fs.readFileSync("db.json"));

  const result = data.vinculados[id] || Object.values(data.vinculados).find(u => u.auth === id);
  if (!result) return res.status(404).json({ error: "No vinculado" });

  return res.status(200).json({
    nick: result.nick,
    stats: {
      goles: 5, // Simulado (aquí deberías traer datos reales en el futuro)
      asistencias: 3,
      paradas: 1
    }
  });
}
