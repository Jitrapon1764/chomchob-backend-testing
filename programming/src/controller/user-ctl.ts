
import { UserDB } from '../db-api/user-db'
import { CryptoDB } from '../db-api/crypto-db';
import { CommonClass } from '../util/class';
const { v4: uuidv4 } = require('uuid');
let commonClass = new CommonClass()
export class UserController {
    async getUser(req: any, res: any) {
        let userDB = new UserDB();
        let result = await userDB.getUserCCCYPT();
        res.json(result)
    }

    async createUser(req: any, res: any) {
        let userDB = new UserDB();
        let body = req.body;
        let data = {
            id: uuidv4(),
            name: body.name,
            balance: parseFloat(body.balance)
        }
        let result = await userDB.createUserCCCYPT(data);
        res.json(result)
    }


    async editBalanceUser(req: any, res: any) {
        let userDB = new UserDB();
        let { balance } = req.body;
        let { id } = req.query
        let result = await userDB.editBalanceUserCCCYPT(id, balance);
        res.json(result)
    }

    async getUserMarketValue(req: any, res: any) {
        let userDB = new UserDB();
        let { id_user } = req.query;
        let result = await userDB.getUserMarketValueCCCYPT(id_user);

        let total_market_value: number = 0;
        for (let item of result) {
            total_market_value += item.market_value;
        }

        let response = {
            "coin": result,
            "total_market_value": total_market_value
        }
        res.json(response)
    }

    async userTransferCrypto(req: any, res: any) {
        // getCryptoByNameCCCYPT
        let cryptoDB = new CryptoDB()
        let { offer_val, offer_name, target_name } = req.body;
        let offer = await cryptoDB.getCryptoByNameCCCYPT(offer_name)
        let target = await cryptoDB.getCryptoByNameCCCYPT(target_name)


        let rate = offer[0].price / target[0].price
        let result = commonClass.formatMoney(offer_val * rate) + ` ${target_name}`

        let response = {
            rate: `1 ${offer_name} : ${commonClass.formatMoney(rate)} ${target_name}`,
            result: result
        }
        res.json(response)
    }

    async editUserCryptoVolume(req: any, res: any) {
        let userDB = new UserDB();
        let body = req.body;
        let id_user = req.query.id_user
        let data = {
            id_crypto: body.id_crypto,
            volume: parseFloat(body.volume)
        }
        let result = await userDB.updateUserBalanceCCCYPT(id_user,data);
        res.json(result)
    }
}