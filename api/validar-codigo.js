let cartas = []; // Aquí debes usar una DB real o cache persistente

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método no permitido' });

  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Falta código' });

  const carta = cartas.find(c => c.code === code.toUpperCase());

  if (!carta) return res.status(404).json({ error: 'Código no encontrado' });

  return res.status(200).json({ username: carta.username });
}
