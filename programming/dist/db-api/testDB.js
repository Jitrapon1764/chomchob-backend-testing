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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdERCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiLWFwaS90ZXN0REIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLG1DQUFvQztBQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQU8sRUFBRSxDQUFDO0FBRXpCLE1BQWEsTUFBTTtJQUNULGFBQWE7O1lBQ2YsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQjs7WUFDbEIsSUFBSTtnQkFDQSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxHQUFHLEdBQUc7OzthQUdULENBQUE7Z0JBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQXhCRCx3QkF3QkMifQ==