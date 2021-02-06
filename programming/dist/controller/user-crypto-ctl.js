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
exports.UserCryptoController = void 0;
const user_crypto_db_1 = require("../db-api/user-crypto-db");
const { v4: uuidv4 } = require('uuid');
class UserCryptoController {
    createUserCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userCryptoDB = new user_crypto_db_1.UserCryptoDB();
            let body = req.body;
            let data = {
                id: uuidv4(),
                id_user: body.id_user,
                id_crypto: body.id_crypto,
                value: parseFloat(body.value)
            };
            let result = yield userCryptoDB.createUserCryptoCCCYPT(data);
            res.json(result);
        });
    }
}
exports.UserCryptoController = UserCryptoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jcnlwdG8tY3RsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvdXNlci1jcnlwdG8tY3RsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF1RDtBQUN2RCxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxNQUFhLG9CQUFvQjtJQUN2QixnQkFBZ0IsQ0FBQyxHQUFRLEVBQUUsR0FBUTs7WUFDckMsSUFBSSxZQUFZLEdBQUcsSUFBSSw2QkFBWSxFQUFFLENBQUM7WUFDdEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRztnQkFDUCxFQUFFLEVBQUUsTUFBTSxFQUFFO2dCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsQ0FBQTtZQUNELElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUFBO0NBQ0o7QUFiRCxvREFhQyJ9