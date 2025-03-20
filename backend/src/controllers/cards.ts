import { Request, Response } from 'express';
import pool from '../database';
import { ResultSetHeader } from 'mysql2';

export const getCards = async (_req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM cards');
  res.json(rows);
};

export const createCard = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO cards (title, description) VALUES (?, ?)',
    [title, description],
  );
  res.status(201).json({ id: result.insertId, title, description });
};

export const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await pool.query('UPDATE cards SET title = ?, description = ? WHERE id = ?', [
    title,
    description,
    id,
  ]);
  res.json({ id, title, description });
};

export const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM cards WHERE id = ?', [id]);
  res.status(204).send();
};
