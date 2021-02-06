
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

    async getUserBalance(req: any, res: any) {
        let userDB = new UserDB();
        let { id_user } = req.query;
        let result = await userDB.getUserBalanceCCCYPT(id_user);

        let balance: number = 0;
        for (let item of result) {
            balance += item.market_val;
        }

        let response = {
            "coin": result,
            "balance": balance
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
}