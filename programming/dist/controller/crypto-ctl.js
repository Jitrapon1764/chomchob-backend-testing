"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const crypto_db_1 = require("../db-api/crypto-db");
const class_1 = require("../util/class");
const { v4: uuidv4 } = require('uuid');
const commonClass = new class_1.CommonClass();
class CryptoController {
    getCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cryptoDB = new crypto_db_1.CryptoDB();
            let result = yield cryptoDB.getCryptoCCCYPT();
            for (let item of result) {
                item.price = `${commonClass.formatMoney(item.price)} usd`;
            }
            res.json(result);
        });
    }
    createCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cryptoDB = new crypto_db_1.CryptoDB();
            let body = req.body;
            let data = {
                id: uuidv4(),
                name: body.name,
                price: parseFloat(body.price)
            };
            let result = yield cryptoDB.createCryptoCCCYPT(data);
            res.json(result);
        });
    }
    updatePriceCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cryptoDB = new crypto_db_1.CryptoDB();
            let { price } = req.body;
            let { id } = req.query;
            let result = yield cryptoDB.updatePriceCryptoCCCYPT(id, price);
            res.json(result);
        });
    }
    getCryptoVolume(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cryptoDB = new crypto_db_1.CryptoDB();
            let { name } = req.query;
            if (name == 'all')
                name = '';
            let result = yield cryptoDB.getCryptoVolumeCCCYPT(name);
            for (let item of result) {
                item.market_value = `${commonClass.formatMoney(item.market_value)} usd`;
            }
            res.json(result);
        });
    }
}
exports.CryptoController = CryptoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLWN0bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2NyeXB0by1jdGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQThDO0FBQzlDLHlDQUE0QztBQUM1QyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLG1CQUFXLEVBQUUsQ0FBQztBQUN0QyxNQUFhLGdCQUFnQjtJQUNuQixTQUFTLENBQUMsR0FBUSxFQUFFLEdBQVE7O1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO1lBQzlCLElBQUksTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTlDLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTthQUM1RDtZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxHQUFHO2dCQUNQLEVBQUUsRUFBRSxNQUFNLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoQyxDQUFBO1lBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQUE7SUFHSyxpQkFBaUIsQ0FBQyxHQUFRLEVBQUUsR0FBUTs7WUFDdEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBUSxFQUFFLENBQUM7WUFDOUIsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7WUFDdEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9ELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTtZQUN4QixJQUFJLElBQUksSUFBSSxLQUFLO2dCQUFFLElBQUksR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEQsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFBO2FBQzFFO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQTdDRCw0Q0E2Q0MifQ==