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
exports.CryptoDB = void 0;
// const pool = require('mariadb');
const db_1 = require("../util/db");
const db = new db_1.MariaDB();
class CryptoDB {
    getCryptoCCCYPT() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let result = yield connect.query("SELECT * from crypto");
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createCryptoCCCYPT(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            INSERT INTO crypto(id,name,price)
            VALUES (?,?,?);
            `;
                let param = [data.id, data.name, data.price];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updatePriceCryptoCCCYPT(id, price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            UPDATE crypto
            SET price = ?
            WHERE id = ?;
            `;
                let param = [price, id];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCryptoVolumeCCCYPT(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            select c.name ,SUM(uc.value) as volume,(c.price*uc.value ) as market_value
            from crypto c left join user_crypto uc on c.id=uc.id_crypto
            where c.name LIKE  ?
            GROUP BY   c.name
            `;
                let param = [`%${name}%`];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCryptoByNameCCCYPT(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            select *
            from crypto c 
            where c.name = ?
            `;
                let param = [name];
                let result = yield connect.query(sql, param);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.CryptoDB = CryptoDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLWRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiLWFwaS9jcnlwdG8tZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLG1DQUFvQztBQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQU8sRUFBRSxDQUFDO0FBRXpCLE1BQWEsUUFBUTtJQUNYLGVBQWU7O1lBQ2pCLElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxJQUFTOztZQUM5QixJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLEdBQUcsR0FBRzs7O2FBR1QsQ0FBQTtnQkFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzVDLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLEVBQVUsRUFBRSxLQUFhOztZQUNuRCxJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLEdBQUcsR0FBRzs7OzthQUlULENBQUE7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ3ZCLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLElBQVc7O1lBQ25DLElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksR0FBRyxHQUFHOzs7OzthQUtULENBQUE7Z0JBQ0QsSUFBSSxLQUFLLEdBQUUsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUE7Z0JBQ3hCLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLElBQVc7O1lBQ25DLElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksR0FBRyxHQUFHOzs7O2FBSVQsQ0FBQTtnQkFDRCxJQUFJLEtBQUssR0FBRSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQTFFRCw0QkEwRUMifQ==