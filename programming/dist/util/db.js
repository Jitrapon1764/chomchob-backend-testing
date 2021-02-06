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
exports.MariaDB = void 0;
const mariadb = require('mariadb');
class MariaDB {
    constructor() {
        //must secret
        this.dbConfig = {
            host: 'ggdbtest.cmq0ofvvelm5.us-east-2.rds.amazonaws.com',
            port: 3306,
            user: 'admin',
            password: 'Jitrapon1764',
            connectionLimit: 5,
            database: "CCCRYPT"
        };
    }
    startDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connect = yield this.getConnection();
                const rows = yield connect.query("SELECT 1 as val");
                if (rows)
                    console.log(`connect ${this.dbConfig.database} success`);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            let connect;
            let pool;
            try {
                pool = yield mariadb.createPool(this.dbConfig);
                connect = yield pool.getConnection("CCCRYPT");
                return connect;
            }
            catch (error) {
            }
            finally {
                if (connect)
                    yield pool.end();
            }
        });
    }
}
exports.MariaDB = MariaDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkMsTUFBYSxPQUFPO0lBQXBCO1FBRUksYUFBYTtRQUNiLGFBQVEsR0FBRztZQUNQLElBQUksRUFBRSxtREFBbUQ7WUFDekQsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxTQUFTO1NBQ3RCLENBQUE7SUF5QkwsQ0FBQztJQXZCUyxPQUFPOztZQUNULElBQUk7Z0JBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLElBQUk7b0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxVQUFVLENBQUMsQ0FBQzthQUN0RTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNmLElBQUksT0FBWSxDQUFDO1lBQ2pCLElBQUksSUFBUyxDQUFDO1lBQ2QsSUFBSTtnQkFDQSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxPQUFPLENBQUE7YUFDakI7WUFBQyxPQUFPLEtBQUssRUFBRTthQUVmO29CQUFTO2dCQUNOLElBQUksT0FBTztvQkFBRSxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTthQUNoQztRQUNMLENBQUM7S0FBQTtDQUNKO0FBbkNELDBCQW1DQyJ9