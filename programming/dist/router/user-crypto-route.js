"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_crypto_ctl_1 = require("../controller/user-crypto-ctl");
const router = express_1.default.Router();
const userCryptoController = new user_crypto_ctl_1.UserCryptoController();
// router.get("/user",userController.getUser);
// router.get("/user/balance",userController.getUserBalance);
router.post("/user-crypto", userCryptoController.createUserCrypto);
// router.put("/user",userController.editBalanceUser);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jcnlwdG8tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVyL3VzZXItY3J5cHRvLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLG1FQUFxRTtBQUNyRSxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQy9CLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxzQ0FBb0IsRUFBRSxDQUFBO0FBRXZELDhDQUE4QztBQUM5Qyw2REFBNkQ7QUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRSxzREFBc0Q7QUFFdEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUEifQ==