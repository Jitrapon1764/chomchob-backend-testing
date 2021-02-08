import express from "express";
import { UserCryptoController } from '../controller/user-crypto-ctl';
const router = express.Router()
const userCryptoController = new UserCryptoController()

router.post("/user-crypto",userCryptoController.createUserCrypto);

module.exports = router