import { Logger } from './logger';
const mariadb = require('mariadb');
const config = require('./config')

var pool: any;
var connect: any;
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
            if (!pool) {
                pool = await mariadb.createPool(config);
                connect = await pool.getConnection("CCCRYPT");
                return connect
            }
            if (!connect) {
                connect = await pool.getConnection("CCCRYPT");
                return connect
            }
            if (connect) {
                return connect
            }
        } catch (error) {
            throw error
        }
    }

    async checkConnectDB(time: number) {
        const _logger = new Logger()
        try {
            _logger.logger.info(`Check connection every ${time} min `)
            const rows = await connect.query("SELECT 1 as val");
            _logger.logger.info(`Check connection DB:${config.database} is connected`)
        } catch (error) {
            _logger.logger.error(`Check connection DB:${config.database} is disconnect`)
            this.reConnect();
        }
    }

    async reConnect() {
        const _logger = new Logger()
        try {
            await this.getConnection();
            _logger.logger.info(`reconnect DB:${config.database} success`)
        } catch (error) {
            _logger.logger.error(`reconnect DB:${config.database} fail`)
        }
    }
}