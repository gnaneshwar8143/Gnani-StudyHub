import { Router } from 'express';
import { signup, login, forgotPassword, verifyEmail, resetPassword, googleRedirect, googleCallback, githubRedirect, githubCallback } from '../controllers/authController';

const router = Router();

// Express expects standard request/response handlers
router.post('/signup', signup as any);
router.post('/login', login as any);
router.post('/forgot-password', forgotPassword as any);
router.post('/verify-email', verifyEmail as any);
router.post('/reset-password', resetPassword as any);
router.get('/google', googleRedirect as any);
router.get('/google/callback', googleCallback as any);
router.get('/github', githubRedirect as any);
router.get('/github/callback', githubCallback as any);

export default router;