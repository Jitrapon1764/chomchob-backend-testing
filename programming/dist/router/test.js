"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_ctl_1 = require("../controller/test-ctl");
const router = express_1.default.Router();
const testController = new test_ctl_1.Test();
router.get("/test-get", testController.tesGetData);
router.post("/test-post", testController.testCreateData);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixxREFBOEM7QUFDOUMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUMvQixNQUFNLGNBQWMsR0FBRyxJQUFJLGVBQUksRUFBRSxDQUFBO0FBRWpDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUEifQ==