// import dotenv from 'dotenv';
// import app from './app.js';
// import { logger } from './config/logger.js';

// dotenv.config();

// const PORT = process.env.PORT || 5005;

// app.listen(PORT, () => {
//   logger.info(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { cardRoutes } from './routes/cards.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

// Основні маршрути
app.use('/api/cards', cardRoutes);

// Обробка помилок
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not FounD' });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на порті ${PORT}`);
});
