const cards = []; // Поки що масив, пізніше підключимо базу

export const getAllCards = (req, res) => {
  res.json(cards);
};

export const createCard = (req, res) => {
  const newCard = { id: Date.now(), ...req.body };
  cards.push(newCard);
  res.status(201).json(newCard);
};

export const updateCard = (req, res) => {
  const { id } = req.params;
  const index = cards.findIndex((card) => card.id == id);
  if (index !== -1) {
    cards[index] = { ...cards[index], ...req.body };
    return res.json(cards[index]);
  }
  res.status(404).json({ message: 'Card not found' });
};

export const deleteCard = (req, res) => {
  const { id } = req.params;
  const index = cards.findIndex((card) => card.id == id);
  if (index !== -1) {
    cards.splice(index, 1);
    return res.json({ message: 'Card deleted' });
  }
  res.status(404).json({ message: 'Card not found' });
};
