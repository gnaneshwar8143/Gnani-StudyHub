import express from 'express';
import { Request, Response } from 'express';
import { getObjectives, createObjective, toggleObjective, deleteObjective } from '../controllers/objectiveController';
import { protect } from '../middleware/authMiddleware';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

const router = express.Router();

// Intercept all endpoints in this router path with auth checking
router.use(protect as any);

// @desc    Get all objectives for the logged-in user
router.get('/', async (req: Request, res: Response) => {
  try {
    const objectives = await getObjectives(req as AuthenticatedRequest);
    res.json(objectives);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// @desc    Create a new objective
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, priority } = req.body;
    if (!title) return res.status(400).json({ message: 'Title parameter missing.' });
    
    const saved = await createObjective(req as AuthenticatedRequest, title, priority || 'Medium');
    res.status(201).json(saved);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// @desc    Toggle objective completion state
router.put('/:id/toggle', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const updated = await toggleObjective(req as unknown as AuthenticatedRequest, req.params.id);
    if (!updated) return res.status(404).json({ message: 'Target matrix data not found.' });
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// @desc    Delete an objective entry entirely
router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const deleted = await deleteObjective(req as unknown as AuthenticatedRequest, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Target matrix data not found.' });
    res.json({ message: 'Objective element removed.' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;