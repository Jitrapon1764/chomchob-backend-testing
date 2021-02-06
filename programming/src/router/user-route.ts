import express from "express";
import { UserController } from '../controller/user-ctl';
const router = express.Router()
const userController = new UserController()

router.get("/user",userController.getUser);
router.get("/user/balance",userController.getUserBalance);
router.post("/user",userController.createUser);
router.post("/user/crypto-transfer",userController.userTransferCrypto);
router.put("/user",userController.editBalanceUser);

module.exports = router