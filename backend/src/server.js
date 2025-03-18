import dotenv from 'dotenv';
import app from './app.js';
import { logger } from './config/logger.js';

dotenv.config();

const PORT = process.env.PORT || 5134;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
