import code from './result_msg_code.json'
import { Logger } from './logger';
let _logger = new Logger()

export class Response{
    public async response(statusCode: number, data: any, res: any,custom?:any) {
        try {
            var resCode: any;
            switch (statusCode) {
                case 20000: resCode = code[statusCode];
                    break;
                case 20100: resCode = code[20100];
                    break;
                case 40000: resCode = code[40000];
                    break;
                case 40101: resCode = code[40101];
                    break;
                case 40102: resCode = code[40102];
                    break;
                case 40103: resCode = code[40103];
                    break;
                case 40300: resCode = code[40300];
                    break;
                case 40301: resCode = code[40301];
                    break;
                case 40302: resCode = code[40302];
                    break;
                case 40400: resCode = code[40400];
                    break;
                case 40401: resCode = code[40401];
                    break;
                case 40900: resCode = code[40900];
                    break;
                case 40901: resCode = code[40901];
                    break;
                case 42200: resCode = code[42200];
                    break;
                case 50000: resCode = code[50000];
                    break;
                case 50001: resCode = code[50001];
                    break;
                case 50002: resCode = code[50002];
                    break;
                case 50003: resCode = code[50003];
                    break;
                case 50100: resCode = code[50100];
                    break;
                case 50300: resCode = code[50300];
                    break;
                case 50301: resCode = code[50301];
                    break;
                case 50400: resCode = code[50400];
                    break;
                default: resCode = code[50000];
                    break;
            }
            var http_status = resCode.http_status;
            let ret = {
                resultCode: resCode.result_code,
                resultDescription: resCode.more_info,
                developerMessage: custom?.devMessage || '',
                resultData: data ? data : resCode.result_data
            }
            _logger.logger.info(`return_status:${resCode.result_code}`)
            res.status(http_status).json(ret);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}