import express, { request } from "express";
const router = express.Router()
const userRoute = require('./user-route') 
const cryptoRoute = require('./crypto-route') 
const userCryptoRoute = require('./user-crypto-route')

router.use(userRoute);
router.use(cryptoRoute);
router.use(userCryptoRoute);

module.exports = router