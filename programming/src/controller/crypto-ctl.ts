
import { CryptoDB } from '../db-api/crypto-db'
import { CommonClass } from '../util/class';
const { v4: uuidv4 } = require('uuid');
const commonClass = new CommonClass();
export class CryptoController {
    async getCrypto(req: any, res: any) {
        let cryptoDB = new CryptoDB();
        let result = await cryptoDB.getCryptoCCCYPT();

        for (let item of result) {
            item.price = `${commonClass.formatMoney(item.price)} usd`
        }

        res.json(result)
    }

    async createCrypto(req: any, res: any) {
        let cryptoDB = new CryptoDB();
        let body = req.body;
        let data = {
            id: uuidv4(),
            name: body.name,
            price: parseFloat(body.price)
        }
        let result = await cryptoDB.createCryptoCCCYPT(data);
        res.json(result)
    }


    async updatePriceCrypto(req: any, res: any) {
        let cryptoDB = new CryptoDB();
        let { price } = req.body;
        let { id } = req.query
        let result = await cryptoDB.updatePriceCryptoCCCYPT(id, price);
        res.json(result)
    }

    async getCryptoVolume(req: any, res: any) {
        let cryptoDB = new CryptoDB();
        let { name } = req.query
        if (name == 'all') name = '';
        let result = await cryptoDB.getCryptoVolumeCCCYPT(name);

        for (let item of result) {
            item.market_value = `${commonClass.formatMoney(item.market_value)} usd`
        }

        res.json(result)
    }
}