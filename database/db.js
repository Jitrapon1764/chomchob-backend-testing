const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("CCCRYPT", "admin", "Jitrapon1764", {
  host: "ggdbtest.cmq0ofvvelm5.us-east-2.rds.amazonaws.com",
  port: 3306,
  dialect: "mariadb",
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
