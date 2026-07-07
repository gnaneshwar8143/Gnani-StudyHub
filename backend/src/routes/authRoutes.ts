import { Router } from 'express';
import { signup, login, forgotPassword, verifyEmail, resetPassword } from '../controllers/authController';

const router = Router();

// Express expects standard request/response handlers
router.post('/signup', signup as any);
router.post('/login', login as any);
router.post('/forgot-password', forgotPassword as any);
router.post('/verify-email', verifyEmail as any);
router.post('/reset-password', resetPassword as any);

export default router;