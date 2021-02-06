const { Sequelize, DataTypes } = require("sequelize");
const User = require("./user-model");
const Item = require("./item-model");

let sequelize = new Sequelize("mariadb::memory:");

const Orders = sequelize.define("orders", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_item: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Item,
      key: "id",
    },
  },
  id_user: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  code: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  purchase_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

//check model
console.log((Orders === sequelize.models.orders)?"orders_model":"orders_model_error");

module.exports = Orders