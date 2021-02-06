import express from "express";
import { CryptoController  } from '../controller/crypto-ctl';
const router = express.Router()
const cryptoController = new CryptoController()

router.get("/crypto",cryptoController.getCrypto);
router.get("/crypto/volume/",cryptoController.getCryptoVolume);
router.post("/crypto",cryptoController.createCrypto);
router.put("/crypto",cryptoController.updatePriceCrypto);

module.exports = router