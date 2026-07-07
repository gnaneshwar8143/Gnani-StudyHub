import { Router } from 'express';
import { signup, login } from '../controllers/authController';

const router = Router();

// Express expects standard request/response handlers
router.post('/signup', signup as any);
router.post('/login', login as any);

export default router;