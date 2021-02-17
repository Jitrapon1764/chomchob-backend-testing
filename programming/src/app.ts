import express from 'express';
import bodyParser from 'body-parser';
import { MariaDB } from './util/db'
import { Logger } from './util/logger';
const router = require('./router/main-route')
const https = require("https");
const fs = require("fs");
const csp = require('content-security-policy');
const cors = require('cors')
const addRequestId = require('express-request-id')();
const db = new MariaDB();
const app = express();
let _logger = new Logger()
const cron = require("node-cron");
require('dotenv').config()


//===content-security-policy=====
const cspPolicy = {
    'default-src': csp.SRC_SELF
};
const globalCSP = csp.getCSP(cspPolicy);
const localCSP = csp.getCSP(cspPolicy);
app.use(globalCSP);
//===============================
app.use(cors())
app.use(addRequestId);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
//===start server========
start_server();
//=======================

db.startDB()
const timeJobs = Number(process.env.DB_TIMECON || 20);
cron.schedule(`*/${timeJobs} * * * *`, function () {
    db.checkConnectDB(timeJobs);
})

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
    const server = https.createServer(options, app);
    server.listen(port, () => {
        _logger.logger.info(`running in port ${port}`)
    });
}


function normalizePort(val: string) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
