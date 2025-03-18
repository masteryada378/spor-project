import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import routes from './routes/index.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { logger } from './config/logger.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('combined', { stream: logger.stream }));

// API маршрути
app.use('/api', routes);

// Обробка помилок
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
