"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const objectiveController_1 = require("../controllers/objectiveController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Protect all routes
router.use(authMiddleware_1.protect);
router.get('/', objectiveController_1.getObjectives);
router.post('/', objectiveController_1.createObjective);
router.put('/:id', objectiveController_1.updateObjective);
router.delete('/:id', objectiveController_1.deleteObjective);
exports.default = router;
//# sourceMappingURL=objectiveRoutes.js.map