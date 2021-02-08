import express from "express";
import { UserController } from '../controller/user-ctl';
const router = express.Router()
const userController = new UserController()

router.get("/user/all",userController.getUser);
router.get("/user/",userController.getUserById);
router.put("/user/balance",userController.editBalanceUser);
router.get("/user/market-value",userController.getUserMarketValue);
router.post("/user",userController.createUser);
router.post("/user/crypto-transfer",userController.userTransferCrypto);
router.put("/user/crypto-volume",userController.editUserCryptoVolume);

module.exports = router