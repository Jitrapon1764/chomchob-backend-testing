
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

            let notFound = commonClass.isEmpty(result)
            if (notFound) {
                await _response.response(40401, '', res)
                return
            }

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

            //validate param
            if (!id) {
                await _response.response(40300, '', res)
                return;
            }

            let result = await userDB.getUserByIdCCCYPT(id);

            //data not found 
            let notFound = commonClass.isEmpty(result[0])
            if (notFound) {
                await _response.response(40401, '', res)
                return
            }

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

            //validate param
            let notExist = !body.name || (!body.balance && body.balance != 0)
            if (notExist || body.balance < 0) {
                await _response.response(40300, '', res)
                return;
            }

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

            //validate param
            let notExist = !id || (!balance && balance != 0)
            if (notExist || balance < 0) {
                await _response.response(40300, '', res)
                return;
            }

            let result = await userDB.editBalanceUserCCCYPT(id, balance);

            //data not found 
            let notFound = (result.affectedRows == 0)
            if (notFound) {
                await _response.response(40401, '', res)
                return;
            }

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

            //validate param
            if (!id_user) {
                await _response.response(40300, '', res)
                return;
            }

            let result = await userDB.getUserMarketValueCCCYPT(id_user);

            //data not found 
            let notFound = (commonClass.isEmpty(result))
            if (notFound) {
                await _response.response(40401, '', res)
                return;
            }

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

            //data not found 
            let notFoundOffer = commonClass.isEmpty(offer);
            let notFoundTarget = commonClass.isEmpty(target);
            if (notFoundOffer || notFoundTarget) {
                await _response.response(40401, '', res)
                return;
            }

            //validate param
            let sameName = offer_name == target_name
            let notExist = !offer_name || !target_name || (!offer_val && offer_val != 0)
            if (notExist || offer_val < 0 || sameName) {
                await _response.response(40300, '', res)
                return;
            }

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

            //validate param
            let notExist = !id_user || !body.id_crypto || (!body.volume && body.volume != 0);
            if (notExist || body.volume < 0) {
                await _response.response(40300, '', res)
                return;
            }

            let data = {
                id_crypto: body.id_crypto,
                volume: parseFloat(body.volume)
            }
            let result = await userDB.updateUserBalanceCCCYPT(id_user, data);

            //data not found 
            let notFound = (result.affectedRows == 0)
            if (notFound) {
                await _response.response(40401, '', res)
                return;
            }

            await _response.response(20000, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }

}