export default function handler(req, res) {
  const { discordId, code } = req.body;
  if (!discordId || !code) return res.status(400).json({ error: 'Faltan datos' });

  const carta = db[code];
  if (!carta) return res.status(404).json({ error: 'Código inválido' });

  carta.vinculado = true;
  carta.discordId = discordId;

  return res.status(200).json({ message: 'Cuenta vinculada' });
}
