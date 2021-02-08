"use strict";
exports.__esModule = true;
exports.Logger = void 0;
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
var path = require('path');
// const env = process.env.NODE_ENV || 'development';
var Logger = /** @class */ (function () {
    function Logger() {
        this.logger = createLogger({
            // change level if in dev environment versus production
            // level: env === 'production' ? 'info' : 'debug',
            format: format.combine(
            // format.label({ label: path.basename(process.env.filename) }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
            transports: [
                new transports.Console({
                    format: format.combine(format.colorize(), format.printf(function (info) {
                        return info.timestamp + " " + info.level + " [" + info.label + "]: " + info.message;
                    }))
                }),
            ]
        });
    }
    return Logger;
}());
exports.Logger = Logger;
