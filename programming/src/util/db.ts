import { Logger } from './logger';
const mariadb = require('mariadb');
const config = require('./config')

var pool: any;
var connect:any;
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
        try {
            if(!pool && !connect){
                pool = await mariadb.createPool(config);
                connect = await pool.getConnection("CCCRYPT");
                return connect
            } else if (connect){
                return connect
            }
        } catch (error) {
            throw error
        }
    }
}