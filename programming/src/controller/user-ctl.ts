
import { UserDB } from '../db-api/user-db'
import { CryptoDB } from '../db-api/crypto-db';
import { CommonClass } from '../util/class';
const { v4: uuidv4 } = require('uuid');
let commonClass = new CommonClass()
import { Response } from '../util/response'
import { Logger } from '../util/logger';
let _response = new Response
export class UserController {
    async getUser(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let result = await userDB.getUserCCCYPT();

            for (let item of result) {
                item.balance = `${commonClass.formatMoney(item.balance)} usd`
            }

            await _response.response(20000, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }

    }

    async getUserById(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let { id } = req.query
            let result = await userDB.getUserByIdCCCYPT(id);

            let response = result[0]
            response.balance = `${commonClass.formatMoney(response.balance)} usd`

            await _response.response(20000, response, res)
        } catch (error) {
            await _response.response(50000, error.message, res)
        }

    }


    async createUser(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let body = req.body;
            let data = {
                id: uuidv4(),
                name: body.name,
                balance: parseFloat(body.balance)
            }
            let result = await userDB.createUserCCCYPT(data);

            await _response.response(20100, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }

    }


    async editBalanceUser(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let { balance } = req.body;
            let { id } = req.query
            let result = await userDB.editBalanceUserCCCYPT(id, balance);
            await _response.response(20000, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }

    async getUserMarketValue(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let { id_user } = req.query;
            let result = await userDB.getUserMarketValueCCCYPT(id_user);

            let total_market_value: number = 0;
            for (let item of result) {
                total_market_value += item.market_value;
                item.crypto_current_price = `${commonClass.formatMoney(item.crypto_current_price)} usd`
                item.market_value = `${commonClass.formatMoney(item.market_value)} usd`
            }

            let response = {
                "coin": result,
                "total_market_value": `${commonClass.formatMoney(total_market_value)} usd`
            }

            await _response.response(20000, response, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }

    }

    async userTransferCrypto(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let cryptoDB = new CryptoDB()
            let { offer_val, offer_name, target_name } = req.body;
            let offer = await cryptoDB.getCryptoByNameCCCYPT(offer_name)
            let target = await cryptoDB.getCryptoByNameCCCYPT(target_name)


            let rate = offer[0].price / target[0].price
            let result = commonClass.formatMoney(offer_val * rate) + ` ${target_name}`

            let response = {
                rate: `1 ${offer_name} : ${commonClass.formatMoney(rate, 5)} ${target_name}`,
                exchange: `${offer_val} ${offer_name} to ${result} ${target_name}`
            }
            await _response.response(20000, response, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }

    async editUserCryptoVolume(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userDB = new UserDB();
            let body = req.body;
            let id_user = req.query.id_user
            let data = {
                id_crypto: body.id_crypto,
                volume: parseFloat(body.volume)
            }
            let result = await userDB.updateUserBalanceCCCYPT(id_user, data);
            await _response.response(20000, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }

}