// const pool = require('mariadb');
import { MariaDB } from '../util/db'
const db = new MariaDB();

export class CryptoDB {
    async getCryptoCCCYPT() {
        try {
            let connect = await db.getConnection()
            let result = await connect.query("SELECT * from crypto");
            return result;
        } catch (error) {
            throw error
        }
    }

    async createCryptoCCCYPT(data: any) {
        try {
            let connect = await db.getConnection()
            let sql = `
            INSERT INTO crypto(id,name,price)
            VALUES (?,?,?);
            `
            let param = [data.id, data.name, data.price]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async updatePriceCryptoCCCYPT(id: string, price: number) {
        try {
            let connect = await db.getConnection()
            let sql = `
            UPDATE crypto
            SET price = ?
            WHERE id = ?;
            `
            let param = [price, id]
            let result = await connect.query(sql, param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async getCryptoVolumeCCCYPT(name:string) {
        try {
            let connect = await db.getConnection()
            let sql = `
            select  c.name ,
                    SUM(uc.value) as volume,
                    c.price as crypto_current_price,
                    (c.price*uc.value ) as market_value
            from crypto c left join user_crypto uc on c.id=uc.id_crypto
            where c.name LIKE  ?
            GROUP BY   c.name
            `
            let param =[`%${name}%`]
            let result = await connect.query(sql,param);
            return result;
        } catch (error) {
            throw error
        }
    }

    async getCryptoByNameCCCYPT(name:string) {
        try {
            let connect = await db.getConnection()
            let sql = `
            select *
            from crypto c 
            where c.name = ?
            `
            let param =[name]
            let result = await connect.query(sql,param);
            return result;
        } catch (error) {
            throw error
        }
    }
}