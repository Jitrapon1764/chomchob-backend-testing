const { createLogger, format, transports } = require('winston');
const path = require('path');
// const env = process.env.NODE_ENV || 'development';
export class Logger {
    getStackInfo() {
        // get call stack, and analyze it
        // get all file, method, and line numbers
        var temp_stack = new Error().stack;
        if (temp_stack != undefined) {
            var stacklist = temp_stack.split('\n').slice(3);
            var stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi
            var stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi

            var s = stacklist[0]
            var sp = stackReg.exec(s) || stackReg2.exec(s)

            if (sp && sp.length === 5) {
                let info =  {
                    method: sp[1],
                    relativePath: path.relative(path.join(__dirname, '..'), sp[2]),
                    line: sp[3],
                    pos: sp[4],
                    file: path.basename(sp[2]),
                    stack: stacklist.join('\n')
                }
                return `${info.file}:${info.line}`
            }
        }
        return undefined;
    }

    logger = createLogger({
        // change level if in dev environment versus production
        // level: env === 'production' ? 'info' : 'debug',
        format: format.combine(
            format.label({ label: this.getStackInfo() }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
        ),
        transports: [
            new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.printf(
                        (info: any) =>
                            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                    )
                )
            }),
        ]
    });


}
