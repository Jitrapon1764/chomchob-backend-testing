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
exports.UserDB = void 0;
// const pool = require('mariadb');
const db_1 = require("../util/db");
const db = new db_1.MariaDB();
class UserDB {
    getUserCCCYPT() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let result = yield connect.query("SELECT * from user");
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createUserCCCYPT(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            INSERT INTO user(id,name,balance)
            VALUES (?,?,?);
            `;
                let param = [data.id, data.name, data.balance];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    editBalanceUserCCCYPT(id, balance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            UPDATE user
            SET balance = ?
            WHERE id = ?;
            `;
                let param = [balance, id];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserBalanceCCCYPT(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            select  c.name as coin,
                    uc.value as volume,
                    c.price,
                    (uc.value * c.price) as market_val
            from user u left join (crypto c left join user_crypto uc on c.id=uc.id_crypto)  on u.id = uc.id_user
            where u.id = ?
            `;
                let param = [id];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UserDB = UserDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiLWFwaS91c2VyREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLG1DQUFvQztBQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQU8sRUFBRSxDQUFDO0FBRXpCLE1BQWEsTUFBTTtJQUNULGFBQWE7O1lBQ2YsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLElBQVM7O1lBQzVCLElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksR0FBRyxHQUFHOzs7YUFHVCxDQUFBO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDOUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsRUFBVSxFQUFFLE9BQWU7O1lBQ25ELElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksR0FBRyxHQUFHOzs7O2FBSVQsQ0FBQTtnQkFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDekIsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsRUFBUzs7WUFDaEMsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxHQUFHLEdBQUc7Ozs7Ozs7YUFPVCxDQUFBO2dCQUNELElBQUksS0FBSyxHQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ2YsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUE1REQsd0JBNERDIn0=