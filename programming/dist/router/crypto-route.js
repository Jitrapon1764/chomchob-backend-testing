"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_ctl_1 = require("../controller/crypto-ctl");
const router = express_1.default.Router();
const cryptoController = new crypto_ctl_1.CryptoController();
router.get("/crypto", cryptoController.getCrypto);
router.get("/crypto/volume/", cryptoController.getCryptoVolume);
router.post("/crypto", cryptoController.createCrypto);
router.put("/crypto", cryptoController.updatePriceCrypto);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLXJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci9jcnlwdG8tcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIseURBQTZEO0FBQzdELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDL0IsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDZCQUFnQixFQUFFLENBQUE7QUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBIn0=