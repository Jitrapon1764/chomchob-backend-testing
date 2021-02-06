"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./util/db");
const router = require('./router/main-route');
const https = require("https");
const fs = require("fs");
const csp = require('content-security-policy');
const cors = require('cors');
const addRequestId = require('express-request-id')();
const db = new db_1.MariaDB();
const app = express_1.default();
//===content-security-policy=====
const cspPolicy = {
    'default-src': csp.SRC_SELF
};
const globalCSP = csp.getCSP(cspPolicy);
const localCSP = csp.getCSP(cspPolicy);
app.use(globalCSP);
//===============================
app.use(cors());
app.use(addRequestId);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(router);
//===start server========
start_server();
//=======================
db.startDB();
app.get('/index', localCSP, (req, res) => {
    res.send(`Hi CCCRYPT. `);
});
function start_server() {
    const privateKey = fs.readFileSync('key.pem');
    const certificate = fs.readFileSync('cert.pem');
    let port = normalizePort('1111');
    app.set('port', port);
    const options = {
        key: privateKey,
        cert: certificate
    };
    var server = https.createServer(options, app);
    server.listen(port, () => {
        console.log(`server running in port ${port}`);
    });
}
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qiw4REFBcUM7QUFDckMsa0NBQW1DO0FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzdDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDL0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7QUFDckQsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFPLEVBQUUsQ0FBQztBQUN6QixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFdEIsaUNBQWlDO0FBQ2pDLE1BQU0sU0FBUyxHQUFHO0lBQ2QsYUFBYSxFQUFFLEdBQUcsQ0FBQyxRQUFRO0NBQzlCLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQixpQ0FBaUM7QUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2YseUJBQXlCO0FBQ3pCLFlBQVksRUFBRSxDQUFDO0FBQ2YseUJBQXlCO0FBRXpCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUVaLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBR0gsU0FBUyxZQUFZO0lBQ2pCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEIsTUFBTSxPQUFPLEdBQUc7UUFDWixHQUFHLEVBQUUsVUFBVTtRQUNmLElBQUksRUFBRSxXQUFXO0tBQ3BCLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFXO0lBQzlCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNkO0lBQ0QsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMifQ==