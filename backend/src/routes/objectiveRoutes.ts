import express from 'express';
import { 
  getObjectives, 
  createObjective, 
  updateObjective, 
  deleteObjective, 
  create2MinTestReminder 
} from '../controllers/objectiveController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Protect all routes
router.use(protect as any);

router.get('/', getObjectives as any);
router.post('/', createObjective as any);
router.post('/test-2min-reminder', create2MinTestReminder as any);
router.put('/:id', updateObjective as any);
router.delete('/:id', deleteObjective as any);

export default router;