"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const habitController_1 = require("../controllers/habitController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Protect all routes
router.use(authMiddleware_1.protect);
router.get('/', habitController_1.getHabits);
router.post('/', habitController_1.createHabit);
router.put('/:id', habitController_1.updateHabit);
router.put('/:id/toggle', habitController_1.toggleHabit);
router.delete('/:id', habitController_1.deleteHabit);
exports.default = router;
//# sourceMappingURL=habitRoutes.js.map