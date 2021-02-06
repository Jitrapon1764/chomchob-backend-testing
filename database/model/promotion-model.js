const { Sequelize, DataTypes } = require("sequelize");
const Item = require("./item-model");

let sequelize = new Sequelize("mariadb::memory:");

const Promotion = sequelize.define("promotion", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_item: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Item,
      key: "id",
    },
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expire_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

//check model
console.log((Promotion === sequelize.models.promotion)?"promotion_model":"promotion_model_error");

module.exports = Promotion