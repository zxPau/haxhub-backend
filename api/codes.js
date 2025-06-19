// Almacenamiento temporal (reemplaza por BD si deseas)
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // O usa tu dominio exacto
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Si es una preflight request, responde inmediatamente
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // El resto de tu código...

const codes = {};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { code, auth, nombre } = req.body;

  if (!code || !auth || !nombre) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  codes[code] = {
    auth,
    nombre,
    timestamp: Date.now()
  };

  // Autoexpira en 10 minutos
  setTimeout(() => delete codes[code], 10 * 60 * 1000);

  return res.status(200).json({ success: true });
}

export { codes }; // exportamos para compartir entre archivos
