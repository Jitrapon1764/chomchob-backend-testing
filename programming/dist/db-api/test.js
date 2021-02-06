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
exports.TestDB = void 0;
// const pool = require('mariadb');
const db_1 = require("../util/db");
const db = new db_1.MariaDB();
class TestDB {
    testGetCCCYPT() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let result = yield connect.query("SELECT * from test");
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    testCreateCCCYPT() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield db.getConnection();
                let sql = `
            INSERT INTO test(id,col1,col2,col3)
            VALUES (1234,'aaa','bbbbb','ccccc');
            `;
                let result = yield connect.query(sql);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.TestDB = TestDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi1hcGkvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW9DO0FBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksWUFBTyxFQUFFLENBQUM7QUFFekIsTUFBYSxNQUFNO0lBQ1QsYUFBYTs7WUFDZixJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUNsQixJQUFJO2dCQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLEdBQUcsR0FBRzs7O2FBR1QsQ0FBQTtnQkFDRCxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBeEJELHdCQXdCQyJ9