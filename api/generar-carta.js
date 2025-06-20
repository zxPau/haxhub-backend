export default async function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // En producción limita el dominio
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder OPTIONS para preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { username, goles, asistencias, code } = req.body;

  // Validación básica
  if (!username || goles == null || asistencias == null || !code) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  const carta = {
    username,
    goles,
    asistencias,
    code,
    creadaEn: new Date().toISOString()
  };

  // Aquí podrías guardar en una DB real
  console.log("📥 Carta generada:", carta);

  return res.status(200).json({ success: true, carta });
}
