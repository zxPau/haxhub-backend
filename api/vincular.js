// POST: usuario de Discord quiere vincular
// Body: { discordId, code }

export default function handler(req, res) {
  const { discordId, code } = req.body;

  if (!code || !discordId) return res.status(400).json({ error: 'Datos faltantes' });
  if (!db[code]) return res.status(404).json({ error: 'Código inválido' });

  db[code].vinculado = true;
  db[code].discordId = discordId;

  return res.status(200).json({ message: 'Cuenta vinculada' });
}
