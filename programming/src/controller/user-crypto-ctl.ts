import { UserCryptoDB } from '../db-api/user-crypto-db'
const { v4: uuidv4 } = require('uuid');
export class UserCryptoController {
    async createUserCrypto(req: any, res: any) {
        let userCryptoDB = new UserCryptoDB();
        let body = req.body;
        let data = {
            id: uuidv4(),
            id_user: body.id_user,
            id_crypto: body.id_crypto,
            value: parseFloat(body.value)
        }
        let result = await userCryptoDB.createUserCryptoCCCYPT(data);
        res.json(result)
    }

}