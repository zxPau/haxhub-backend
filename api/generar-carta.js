// POST: recibe carta del servidor headless
// Body: { username, goles, asistencias, code }

let db = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, goles, asistencias, code } = req.body;
    if (!code) return res.status(400).json({ error: 'Código requerido' });

    db[code] = {
      username,
      goles,
      asistencias,
      vinculado: false,
      discordId: null,
    };

    return res.status(200).json({ message: 'Carta creada', code });
  }

  return res.status(405).end();
}
