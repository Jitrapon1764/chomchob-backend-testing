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
            console.log(error);
        }
    }

    async createUserCCCYPT(data: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
            INSERT INTO user(id,name,balance)
            VALUES (?,?,?);
            `
            let param = [data.id, data.name, data.balance]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    }

    async getUserBalanceCCCYPT(id:string) {
        try {
            let connect = await db.getConnection()
            let sql = `
            select  c.name as coin,
                    uc.value as volume,
                    c.price,
                    (uc.value * c.price) as market_val
            from user u left join (crypto c left join user_crypto uc on c.id=uc.id_crypto)  on u.id = uc.id_user
            where u.id = ?
            `
            let param =[id]
            let result = await connect.query(sql,param);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}