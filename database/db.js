const { Sequelize } = require("sequelize");
require("dotenv").config();

let db_name = process.env.DB_NAME;
let db_user = process.env.DB_USER;
let db_pwd = process.env.DB_PASS;
let db_host = process.env.DB_HOST;
let db_port = process.env.DB_PORT;
let db_dialect = process.env.DB_DIALACT;

const sequelize = new Sequelize(db_name, db_user, db_pwd, {
  host: db_host,
  port: db_port,
  dialect: db_dialect,
});

var testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();
