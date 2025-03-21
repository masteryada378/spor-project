import morgan from 'morgan';
import { logger } from '../config/logger.js';

const requestLogger = morgan('tiny', {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export default requestLogger;
