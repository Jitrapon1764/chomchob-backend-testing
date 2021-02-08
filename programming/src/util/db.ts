import { Logger } from './logger';
const mariadb = require('mariadb');

export class MariaDB {

    //must secret
    dbConfig = {
        host: 'ggdbtest.cmq0ofvvelm5.us-east-2.rds.amazonaws.com',
        port: 3306,
        user: 'admin',
        password: 'Jitrapon1764',
        connectionLimit: 5,
        database: "CCCRYPT"
    }

    async startDB() {
        const _logger = new Logger()
        try {
            let connect = await this.getConnection();
            const rows = await connect.query("SELECT 1 as val");
            if (rows) {
                _logger.logger.info(`connect DB:${this.dbConfig.database} success`)
            }
        } catch (error) {
            _logger.logger.info(`connect DB:${this.dbConfig.database} fail`)
            throw error
        }
    }

    async getConnection() {
        let connect: any;
        let pool: any;
        try {
            pool = await mariadb.createPool(this.dbConfig);
            connect = await pool.getConnection("CCCRYPT");
            return connect
        } catch (error) {

        } finally {
            if (connect) await pool.end()
        }
    }
}