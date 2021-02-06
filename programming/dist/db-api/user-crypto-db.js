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
exports.UserCryptoDB = void 0;
// const pool = require('mariadb');
const db_1 = require("../util/db");
const db = new db_1.MariaDB();
class UserCryptoDB {
    // async getUserCCCYPT() {
    //     try {
    //         let connect = await db.getConnection()
    //         let result = await connect.query("SELECT * from user");
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    createUserCryptoCCCYPT(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            INSERT INTO user_crypto(id,id_user,id_crypto,value)
            VALUES (?,?,?,?);
            `;
                let param = [data.id, data.id_user, data.id_crypto, data.value];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UserCryptoDB = UserCryptoDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jcnlwdG8tZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGItYXBpL3VzZXItY3J5cHRvLWRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyxtQ0FBb0M7QUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFPLEVBQUUsQ0FBQztBQUV6QixNQUFhLFlBQVk7SUFDckIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpREFBaUQ7SUFDakQsa0VBQWtFO0lBQ2xFLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixJQUFJO0lBRUUsc0JBQXNCLENBQUMsSUFBUzs7WUFDbEMsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxHQUFHLEdBQUc7OzthQUdULENBQUE7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQy9ELElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtDQW1CSjtBQTNDRCxvQ0EyQ0MifQ==