export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { username, goles, asistencias, code } = req.body;

  // Validación básica
  if (!username || goles == null || asistencias == null || !code) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  // Simulación de almacenamiento (puedes reemplazar por DB real)
  const carta = {
    username,
    goles,
    asistencias,
    code,
    creadaEn: new Date().toISOString()
  };

  // Aquí podrías guardar en una DB como Firebase, MongoDB, PlanetScale, etc.
  console.log("📥 Carta generada:", carta);

  return res.status(200).json({ success: true, carta });
}
