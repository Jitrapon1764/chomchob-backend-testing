// const pool = require('mariadb');
import { MariaDB } from '../util/db'
const db = new MariaDB();

export class UserDB {
    async getUserCCCYPT() {
        try {
            let connect = await db.getConnection()
            let result = await connect.query("SELECT * from user");
            return result;
        } catch (error) {
            throw error
        }
    }

    async createUserCCCYPT(data: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
            INSERT INTO user(id,name)
            VALUES (?,?);
            `
            let param = [data.id, data.name]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async editBalanceUserCCCYPT(id: string, balance: number) {
        try {
            let connect = await db.getConnection()
            let sql = `
            UPDATE user
            SET balance = ?
            WHERE id = ?;
            `
            let param = [balance, id]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async getUserMarketValueCCCYPT(id: string) {
        try {
            let connect = await db.getConnection()
            let sql = `
            SELECT  c.name AS coin,
                    sum(uc.value) AS volume,
                    sum(c.price) AS crypto_current_price,
                    sum((uc.value * c.price)) AS market_value
            FROM user u
            LEFT JOIN (crypto c
                        LEFT JOIN user_crypto uc ON c.id=uc.id_crypto) ON u.id = uc.id_user
            WHERE u.id = ?
            GROUP BY c.name
            `
            let param = [id]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }


    async updateUserBalanceCCCYPT(id_user: string, data: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
                UPDATE user_crypto uc
                SET value = ?
                WHERE uc.id_user = ?
                AND uc.id_crypto = ?
            `
            let param = [data.volume, id_user, data.id_crypto]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }
}