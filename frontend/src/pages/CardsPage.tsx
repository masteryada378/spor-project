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
    <div className="wrapper">
      <div className="head">
        Totalizator{' '}
        <button className="btn" onClick={() => navigate('/create')}>
          Додати суперечку
        </button>
      </div>
      <div className="content">
        <div className="filter">
          <ul>
            <li>sport</li>
            <li>history</li>
            <li>star</li>
            <li>friend</li>
          </ul>
        </div>
        <div className="card-box">
          <div className="card-list">
            {cards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
        <div className="infoCard">card INFO</div>
      </div>
      <footer className="footer">згідно з усім</footer>
    </div>
  );
};

export default CardsPage;
