import express from 'express';
import { getStats, updateStats } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.use(protect as any);

router.get('/stats', getStats as any);
router.put('/stats', updateStats as any);

export default router;
