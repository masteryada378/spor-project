import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import cardRoutes from './routes/cards';
import { connectDB } from './database';
import dotenv from 'dotenv';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';
import { logger } from './config/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use(notFoundHandler); // якщо маршрут не знайдено
app.use(errorHandler); // обробка інших помилок

// Підключаємо API маршрут для карток
app.use('/api/cards', cardRoutes);

// Запуск сервера
app.listen(PORT, async () => {
  await connectDB();
  logger.info(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (_req, res) => {
  res.send('API is running...');
});
