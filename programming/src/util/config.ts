// const config = {
//     host: process.env.DB_HOST || 'ggdbtest.cmq0ofvvelm5.us-east-2.rds.amazonaws.com',
//     port: process.env.DB_PORT || 3306,
//     user: process.env.DB_USER || 'admin',
//     password: process.env.DB_PASS || 'Jitrapon1764',
//     database: process.env.DB_NAME || 'CCCRYPT'
// }

const config = {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME 
}


module.exports = config



