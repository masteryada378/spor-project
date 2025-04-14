import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import cardRoutes from './routes/cards';
import { connectDB } from './database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

// Підключаємо API маршрут для карток
app.use('/api/cards', cardRoutes);

// Запуск сервера
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (_req, res) => {
  res.send('API is running...');
});
