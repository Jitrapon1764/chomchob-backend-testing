
import { CryptoDB } from '../db-api/crypto-db'
import { CommonClass } from '../util/class';
const { v4: uuidv4 } = require('uuid');
const commonClass = new CommonClass();
import { Response } from '../util/response'
import { Logger } from '../util/logger';

let _response = new Response()

export class CryptoController {
    async getCrypto(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let cryptoDB = new CryptoDB();
            let result = await cryptoDB.getCryptoCCCYPT();

            //data not found 
            let notFound = (commonClass.isEmpty(result))
            if (notFound) {
                await _response.response(40401, '', res)
                return;
            }

            for (let item of result) {
                item.price = `${commonClass.formatMoney(item.price)} usd`
            }
            await _response.response(20000, result, res)

        } catch (error) {
            await _response.response(50000, error, res)
        }
    }

    async createCrypto(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let cryptoDB = new CryptoDB();
            let body = req.body;

            //validate param
            let notExist = !body.name || (!body.price && body.price != 0)
            if (notExist || body.price < 0) {
                await _response.response(40300, '', res)
                return;
            }

            let data = {
                id: uuidv4(),
                name: body.name,
                price: parseFloat(body.price)
            }
            let result = await cryptoDB.createCryptoCCCYPT(data);

            await _response.response(20100, result, res)
        } catch (error) {
            //duplicate
            if (error.code = 'ER_DUP_ENTRY') {
                await _response.response(40300, '', res)
                return;
            }

            await _response.response(50000, error, res)
        }
    }


    async updatePriceCrypto(req: any, res: any) {

        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let cryptoDB = new CryptoDB();
            let { price } = req.body;
            let { id } = req.query

            //validate param
            let notExist = !id || (!price && price != 0)
            if (notExist || price < 0) {
                await _response.response(40300, '', res)
                return;
            }

            let result = await cryptoDB.updatePriceCryptoCCCYPT(id, price);

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

    async getCryptoVolume(req: any, res: any) {
        try {
            let _logger = new Logger()
            let _req = `${req.method} ${req.originalUrl}`
            _logger.logger.info(_req)
            let cryptoDB = new CryptoDB();
            let { name } = req.query

            if (!name) {
                await _response.response(40300, '', res)
                return;
            }

            if (name == 'all') name = '';
            let result = await cryptoDB.getCryptoVolumeCCCYPT(name);

            //data not found 
            let notFound = (commonClass.isEmpty(result))
            if (notFound) {
                await _response.response(40401, '', res)
                return;
            }

            for (let item of result) {
                item.market_volume = item.market_volume ? item.market_volume : 0
                item.crypto_current_price = `${commonClass.formatMoney(item.crypto_current_price)} usd`
                item.market_value = `${commonClass.formatMoney(item.market_value)} usd`
            }
            await _response.response(20000, result, res)
        } catch (error) {
            await _response.response(50000, error, res)
        }
    }
}