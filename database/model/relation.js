const { Sequelize } = require("sequelize");
const User = require("./user-model");
const Item = require("./item-model");
const Orders = require("./orders-model");
const Promotion = require("./promotion-model");

User.hasMany(Orders)
Orders.belongsTo(User, {
  foreignKey: "id_user",
});

Item.hasMany(Orders)
Orders.belongsTo(Item, {
  foreignKey: "id_item",
});

Item.hasMany(Promotion)
Promotion.belongsTo(Item,{
    foreignKey:"id_item"
})

