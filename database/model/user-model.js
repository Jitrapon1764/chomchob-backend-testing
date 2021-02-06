const { Sequelize, DataTypes } = require("sequelize");
let sequelize = new Sequelize("mariadb::memory:");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//check model
console.log((User === sequelize.models.user)?"user_model":"user_model_error");

module.exports = User
