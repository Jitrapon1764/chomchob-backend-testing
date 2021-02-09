import { UserCryptoDB } from '../db-api/user-crypto-db'
const { v4: uuidv4 } = require('uuid');
import { Response } from '../util/response'
import { Logger } from '../util/logger';
let _response = new Response
export class UserCryptoController {

    async createUserCrypto(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let userCryptoDB = new UserCryptoDB();
            let body = req.body;

            //validate param
            let notExist = !body.id_user || !body.id_crypto || (!body.value && body.value != 0)
            if (notExist || body.value < 0) {
                await _response.response(40300, '', res)
                return;
            }

            let data = {
                id: uuidv4(),
                id_user: body.id_user,
                id_crypto: body.id_crypto,
                value: parseFloat(body.value)
            }
            let result = await userCryptoDB.createUserCryptoCCCYPT(data);
            await _response.response(20100, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }
}