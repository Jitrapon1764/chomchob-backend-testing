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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi1hcGkvdXNlci1kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW9DO0FBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksWUFBTyxFQUFFLENBQUM7QUFFekIsTUFBYSxNQUFNO0lBQ1QsYUFBYTs7WUFDZixJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsSUFBUzs7WUFDNUIsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxHQUFHLEdBQUc7OzthQUdULENBQUE7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUM5QyxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxFQUFVLEVBQUUsT0FBZTs7WUFDbkQsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxHQUFHLEdBQUc7Ozs7YUFJVCxDQUFBO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUN6QixJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxFQUFTOztZQUNoQyxJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLEdBQUcsR0FBRzs7Ozs7OzthQU9ULENBQUE7Z0JBQ0QsSUFBSSxLQUFLLEdBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDZixJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQTVERCx3QkE0REMifQ==