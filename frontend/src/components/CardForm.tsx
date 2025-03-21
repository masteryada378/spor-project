import React, { useState } from 'react';
import { createCard } from '../services/api';

const CardForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCard(title, description);
    setTitle('');
    setDescription('');
    alert('Картку створено!');
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <input
        type="text"
        placeholder="Назва картки"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Опис картки"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Створити картку</button>
    </form>
  );
};

export default CardForm;
