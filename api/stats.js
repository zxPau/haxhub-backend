// GET: /api/stats?discordId=xxx

export default function handler(req, res) {
  const { discordId } = req.query;
  const user = Object.values(db).find(u => u.discordId === discordId);

  if (!user) return res.status(404).json({ error: 'No encontrado' });

  return res.status(200).json(user);
}
