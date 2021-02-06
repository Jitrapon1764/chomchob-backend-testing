// const pool = require('mariadb');
import { MariaDB } from '../util/db'
const db = new MariaDB();

export class UserCryptoDB {
    // async getUserCCCYPT() {
    //     try {
    //         let connect = await db.getConnection()
    //         let result = await connect.query("SELECT * from user");
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async createUserCryptoCCCYPT(data: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
            INSERT INTO user_crypto(id,id_user,id_crypto,value)
            VALUES (?,?,?,?);
            `
            let param = [data.id, data.id_user, data.id_crypto, data.value]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            console.log(error);
        }   
    }

    // async editBalanceUserCCCYPT(id: string, balance: number) {
    //     try {
    //         let connect = await db.getConnection()
    //         let sql = `
    //         UPDATE user
    //         SET balance = ?
    //         WHERE id = ?;
    //         `
    //         let param = [balance, id]
    //         let result = await connect.query(sql, param);
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


}