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
exports.UserController = void 0;
const user_db_1 = require("../db-api/user-db");
const crypto_db_1 = require("../db-api/crypto-db");
const class_1 = require("../util/class");
const { v4: uuidv4 } = require('uuid');
let commonClass = new class_1.CommonClass();
class UserController {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userDB = new user_db_1.UserDB();
            let result = yield userDB.getUserCCCYPT();
            res.json(result);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userDB = new user_db_1.UserDB();
            let body = req.body;
            let data = {
                id: uuidv4(),
                name: body.name,
                balance: parseFloat(body.balance)
            };
            let result = yield userDB.createUserCCCYPT(data);
            res.json(result);
        });
    }
    editBalanceUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userDB = new user_db_1.UserDB();
            let { balance } = req.body;
            let { id } = req.query;
            let result = yield userDB.editBalanceUserCCCYPT(id, balance);
            res.json(result);
        });
    }
    getUserBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userDB = new user_db_1.UserDB();
            let { id_user } = req.query;
            let result = yield userDB.getUserBalanceCCCYPT(id_user);
            let balance = 0;
            for (let item of result) {
                balance += item.market_val;
            }
            let response = {
                "coin": result,
                "balance": balance
            };
            res.json(response);
        });
    }
    userTransferCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // getCryptoByNameCCCYPT
            let cryptoDB = new crypto_db_1.CryptoDB();
            let { offer_val, offer_name, target_name } = req.body;
            let offer = yield cryptoDB.getCryptoByNameCCCYPT(offer_name);
            let target = yield cryptoDB.getCryptoByNameCCCYPT(target_name);
            let rate = offer[0].price / target[0].price;
            let result = commonClass.formatMoney(offer_val * rate) + ` ${target_name}`;
            let response = {
                rate: `1 ${offer_name} = ${commonClass.formatMoney(rate)} ${target_name}`,
                result: result
            };
            res.json(response);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jdGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci91c2VyLWN0bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFDMUMsbURBQStDO0FBQy9DLHlDQUE0QztBQUM1QyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLG1CQUFXLEVBQUUsQ0FBQTtBQUNuQyxNQUFhLGNBQWM7SUFDakIsT0FBTyxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFRLEVBQUUsR0FBUTs7WUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7WUFDMUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRztnQkFDUCxFQUFFLEVBQUUsTUFBTSxFQUFFO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEMsQ0FBQTtZQUNELElBQUksTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUFBO0lBR0ssZUFBZSxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTtZQUN0QixJQUFJLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsR0FBUSxFQUFFLEdBQVE7O1lBQ25DLElBQUksTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzVCLElBQUksTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXhELElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztZQUN4QixLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDckIsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDOUI7WUFFRCxJQUFJLFFBQVEsR0FBRztnQkFDWCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUUsT0FBTzthQUNyQixDQUFBO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QixDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFRLEVBQUUsR0FBUTs7WUFDdkMsd0JBQXdCO1lBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFBO1lBQzdCLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUQsSUFBSSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUE7WUFHOUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQzNDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7WUFFMUUsSUFBSSxRQUFRLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLEtBQUssVUFBVSxNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUN6RSxNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFBO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QixDQUFDO0tBQUE7Q0FDSjtBQTlERCx3Q0E4REMifQ==