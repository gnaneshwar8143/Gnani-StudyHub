"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.use(authMiddleware_1.protect);
router.get('/', userController_1.getProfile);
router.put('/', userController_1.updateProfile);
exports.default = router;
//# sourceMappingURL=profileRoutes.js.map