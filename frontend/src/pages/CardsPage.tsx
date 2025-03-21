import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { fetchCards } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface CardData {
  id: number;
  title: string;
  description: string;
}

const CardsPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  return (
    <div>
      <h1>Картки</h1>
      <button onClick={() => navigate('/create')}>Додати картку</button>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
