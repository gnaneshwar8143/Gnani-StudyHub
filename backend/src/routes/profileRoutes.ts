import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.use(protect as any);

router.get('/', getProfile as any);
router.put('/', updateProfile as any);

export default router;
