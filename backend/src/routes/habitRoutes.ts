import express from 'express';
import { getHabits, createHabit, updateHabit, toggleHabit, deleteHabit } from '../controllers/habitController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Protect all routes
router.use(protect as any);

router.get('/', getHabits as any);
router.post('/', createHabit as any);
router.put('/:id', updateHabit as any);
router.put('/:id/toggle', toggleHabit as any);
router.delete('/:id', deleteHabit as any);

export default router;