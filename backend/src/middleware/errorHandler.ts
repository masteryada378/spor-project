import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(404).json({ error: 'Route not founD' });
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server erroR' });
};
