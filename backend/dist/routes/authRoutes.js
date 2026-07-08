"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Express expects standard request/response handlers
router.post('/signup', authController_1.signup);
router.post('/login', authController_1.login);
router.post('/forgot-password', authController_1.forgotPassword);
router.post('/verify-email', authController_1.verifyEmail);
router.post('/reset-password', authController_1.resetPassword);
router.post('/oauth-login', authController_1.oauthLogin);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map