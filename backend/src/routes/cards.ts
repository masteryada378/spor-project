// import express from 'express';
// import { getAllCards, createCard, updateCard, deleteCard } from '../controllers/cards.js';

// const router = express.Router();

// router.get('/', getAllCards);
// router.post('/', createCard);
// router.put('/:id', updateCard);
// router.delete('/:id', deleteCard);

// export { router as cardRoutes };

import express from 'express';
import { getCards, createCard, updateCard, deleteCard } from '../controllers/cards';

const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.put('/:id', updateCard);
router.delete('/:id', deleteCard);

export default router;
