let db = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, goles, asistencias, code } = req.body;
    if (!code || !username) return res.status(400).json({ error: 'Datos faltan' });

    db[code] = {
      username,
      goles,
      asistencias,
      vinculado: false,
      discordId: null
    };

    return res.status(200).json({ message: 'Carta registrada', code });
  }

  res.status(405).end();
}
