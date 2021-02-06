"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_ctl_1 = require("../controller/user-ctl");
const router = express_1.default.Router();
const userController = new user_ctl_1.UserController();
router.get("/user", userController.getUser);
router.get("/user/balance", userController.getUserBalance);
router.post("/user", userController.createUser);
router.post("/user/crypto-transfer", userController.userTransferCrypto);
router.put("/user", userController.editBalanceUser);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXIvdXNlci1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixxREFBd0Q7QUFDeEQsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUMvQixNQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQTtBQUUzQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVuRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQSJ9