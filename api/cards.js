const cards = {};

export default function handler(req, res) {
  // Permitir CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // permite cualquier origen
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Respuesta rápida a preflight
    res.status(204).end();
    return;
  }

  if (req.method === "POST") {
    const { id, nick, goals, assists, saves } = req.body;
    if (!id) return res.status(400).json({ error: "Falta id" });

    cards[id] = { nick, goals, assists, saves };
    console.log(`Carta guardada: ${nick} (${id})`);

    res.status(200).json({ status: "ok" });
  } else if (req.method === "GET") {
    const id = req.query.id;
    if (!id || !cards[id]) {
      return res.status(404).json({ error: "Carta no encontrada.." });
    }
    res.status(200).json(cards[id]);
  } else {
    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
