import morgan from 'morgan';
import { logger } from '../config/logger.js';
// TODO remove
const requestLogger = morgan('tiny', {
  stream: {
    write: (message: string) => logger.info(message.trim()),
  },
});

export default requestLogger;
