
import { UserDB } from '../db-api/user-db'
import { CryptoDB } from '../db-api/crypto-db';
import { CommonClass } from '../util/class';
const { v4: uuidv4 } = require('uuid');
let commonClass = new CommonClass()
import { Response } from '../util/response'
import { Logger } from '../util/logger';
import { MariaDB } from '../util/db';
import { UserCryptoDB } from '../db-api/user-crypto-db';
let _response = new Response
const db = new MariaDB();

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

    async transferCrypto(req: any, res: any) {
        let _logger = new Logger()
        let cryptoDB = new CryptoDB()
        let userDB = new UserDB();
        let userCryptoDB = new UserCryptoDB();

        let connect: any
        try {
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let { id_user } = req.query;
            let { offer_val, offer_name, target_name, target_id_user } = req.body;

            let get_user_offer = await userDB.getUserMarketValueCCCYPT(id_user);
            let offer = await cryptoDB.getCryptoByNameCCCYPT(offer_name)
            let target = await cryptoDB.getCryptoByNameCCCYPT(target_name)
            let rate = offer[0].price / target[0].price


            let volume_after_offer = 0;
            let volume_after_offer_exchange = 0;
            let exchange_value = rate * offer_val
            let offerHaveCoin = false;
            let targetHaveCoin = false;

            for (let item of get_user_offer) {
                if (item.coin == offer_name) {
                    if (item.volume < offer_val) {
                        await _response.response(40300, 'your coin is not enough', res)
                        return;
                    }
                    volume_after_offer = item.volume - offer_val
                }
                if (item.coin == target_name) {
                    offerHaveCoin = true
                    volume_after_offer_exchange = item.volume + exchange_value
                }

            }

            let get_user_target = await userDB.getUserMarketValueCCCYPT(target_id_user);
            for (let item of get_user_target) {
                if (item.coin == target_name) {
                    if (item.volume < exchange_value) {
                        await _response.response(40300, 'target coin is not enough', res)
                        return;
                    }
                }
            }

            let target_user_coin;
            let target_user_coin_exchange;

            for (let item of get_user_target) {
                if (item.coin == target_name) {
                    target_user_coin = item
                }
                if (item.coin == offer_name) {
                    targetHaveCoin = true
                    target_user_coin_exchange = item
                }
            }


            // start transaction--------------------------------------------------------------------------------
            connect = await db.getConnection();
            await connect.beginTransaction();

            //offer_user-----------------------------------------------
            let update_volume_offer: any = {
                volume: volume_after_offer,
                id_crypto: offer[0]?.id
            }
            let update_offer_user = await userDB.updateUserBalanceCCCYPT(id_user, update_volume_offer);


            if (offerHaveCoin) {
                //have coin -> update
                let update_volume_offer_exchange: any = {
                    volume: volume_after_offer_exchange,
                    id_crypto: target[0]?.id
                }
                let update_offer_user_receive = await userDB.updateUserBalanceCCCYPT(id_user, update_volume_offer_exchange);
            } else {
                //dont have coin -> create
                let data = {
                    id: uuidv4(),
                    id_user: id_user,
                    id_crypto: target[0]?.id,
                    value: volume_after_offer_exchange,
                }
                let create_offer_user_receive = await userCryptoDB.createUserCryptoCCCYPT(data);
            }

            //target_user----------------------------------------------

            let update_target_volume: any = {
                volume: (target_user_coin?.volume) - exchange_value,
                id_crypto: target[0]?.id
            }
            let update_target_user_receive = await userDB.updateUserBalanceCCCYPT(target_id_user, update_target_volume);


            if (targetHaveCoin) {
                //have coin -> update
                let update_volume_target_exchange: any = {
                    volume: (target_user_coin_exchange?.volume) + offer_val,
                    id_crypto: offer[0]?.id
                }
                let update_target_user = await userDB.updateUserBalanceCCCYPT(target_id_user, update_volume_target_exchange);
            } else {
                //dont have coin -> create
                let data = {
                    id: uuidv4(),
                    id_user: target_id_user,
                    id_crypto: offer[0]?.id,
                    value: offer_val,
                }
                let create_target_user = await userCryptoDB.createUserCryptoCCCYPT(data);
            }

            // commit tran--------------------------------------------------------------------------------------------
            await connect.commit();
            await _response.response(20000, '', res)

        } catch (error) {
            await connect.rollback();

            console.log(error);
        }

    }
}