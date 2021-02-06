import express from "express";
import { UserCryptoController } from '../controller/user-crypto-ctl';
const router = express.Router()
const userCryptoController = new UserCryptoController()

// router.get("/user",userController.getUser);
// router.get("/user/balance",userController.getUserBalance);
router.post("/user-crypto",userCryptoController.createUserCrypto);
// router.put("/user",userController.editBalanceUser);

module.exports = router