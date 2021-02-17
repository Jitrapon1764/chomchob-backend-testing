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
    //         throw error
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
            throw error
        }
    }

    async getUserCryptoCCCYPT(id_user: string, id_crypt: string) {
        try {
            let connect = await db.getConnection()
            let sql = `
                select * from user_crypto uc 
                where uc.id_user = ?
                and uc.id_crypto	= ?
            `
            let param = [id_user, id_crypt]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async updateUserCryptoCCCYPT(id: string, value: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
            UPDATE user_crypto
            SET value = ?
            WHERE id = ?;
            `
            let param = [value , id]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }
}