import winston from 'winston';

// Розширюємо інтерфейс Logger
declare module 'winston' {
  interface Logger {
    writeStream: {
      write(message: string): void;
    };
  }
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  transports: [new winston.transports.Console()],
});

logger.writeStream = {
  write: (message: string) => logger.info(message.trim()),
};

export { logger };
