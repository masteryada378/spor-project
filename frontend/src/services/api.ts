const API_URL = 'http://localhost:5005/api/cards';

export const fetchCards = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createCard = async (title: string, description: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  return response.json();
};
