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
exports.Test = void 0;
const testDB_1 = require("../db-api/testDB");
class Test {
    tesGetData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tesBDservice = new testDB_1.TestDB();
            let result = yield tesBDservice.testGetCCCYPT();
            res.json(result);
        });
    }
    testCreateData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tesBDservice = new testDB_1.TestDB();
            let result = yield tesBDservice.testCreateCCCYPT();
            res.json(result);
        });
    }
}
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jdGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci90ZXN0LWN0bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBeUM7QUFDekMsTUFBYSxJQUFJO0lBQ1AsVUFBVSxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUMvQixJQUFJLFlBQVksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1lBQ2hDLElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQVEsRUFBRSxHQUFROztZQUNuQyxJQUFJLFlBQVksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1lBQ2hDLElBQUksTUFBTSxHQUFHLE1BQU0sWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQVpELG9CQVlDIn0=