const { Sequelize, DataTypes } = require("sequelize");
let sequelize = new Sequelize("mariadb::memory:");

const Item = sequelize.define("item", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(30,2),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expire_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

//check model
console.log((Item === sequelize.models.item)?"item_model":"item_model_error");

module.exports = Item