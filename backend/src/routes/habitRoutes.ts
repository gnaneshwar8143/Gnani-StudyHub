import express from 'express';
import { Request, Response } from 'express';
import { getHabits, createHabit, toggleHabit, deleteHabit } from '../controllers/habitController';
import { protect } from '../middleware/authMiddleware';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

const router = express.Router();

router.use(protect as any);

router.get('/', async (req: Request, res: Response) => {
  try {
    const habits = await getHabits(req as AuthenticatedRequest);
    res.json(habits);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name requirement missing.' });
    
    const savedHabit = await createHabit(req as AuthenticatedRequest, name);
    res.status(201).json(savedHabit);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id/toggle', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const updatedHabit = await toggleHabit(req as unknown as AuthenticatedRequest, req.params.id);
    if (!updatedHabit) return res.status(404).json({ message: 'Target matrix data not found.' });
    res.json(updatedHabit);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const deleted = await deleteHabit(req as unknown as AuthenticatedRequest, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Target matrix data not found.' });
    res.json({ message: 'Habit tracking entry purged.' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;