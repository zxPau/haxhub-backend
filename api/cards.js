const cards = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, nick, goals, assists, saves } = req.body;
    if (!id) return res.status(400).json({ error: "Falta id" });

    cards[id] = { nick, goals, assists, saves };
    console.log(`Carta guardada: ${nick} (${id})`);

    res.status(200).json({ status: "ok" });
  } else if (req.method === "GET") {
    const id = req.query.id;
    if (!id || !cards[id]) {
      return res.status(404).json({ error: "Carta no encontrada" });
    }
    res.status(200).json(cards[id]);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
