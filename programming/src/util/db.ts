import { Logger } from './logger';
const mariadb = require('mariadb');
const config  = require('./config')
export class MariaDB {

    async startDB() {
        const _logger = new Logger()
        try {
            let connect = await this.getConnection();
            const rows = await connect.query("SELECT 1 as val");
            if (connect && rows) {
                _logger.logger.info(`connect DB:${config.database} success`)
            }
        } catch (error) {
            _logger.logger.error(`connect DB:${config.database} fail`)
        }
    }

    async getConnection() {
        let connect: any;
        let pool: any;
        try {
            pool = await mariadb.createPool(config);
            connect = await pool.getConnection("CCCRYPT");
            return connect
        } catch (error) {
            throw error
        } finally {
            if (connect) await pool.end()
        }
    }
}