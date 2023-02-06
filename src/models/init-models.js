const DataTypes = require("sequelize").DataTypes;
const _cart_ecommerce = require("./cart_ecommerce");
const _order_ecommerce = require("./order_ecommerce");
const _product_ecommerce = require("./product_ecommerce");
const _product_in_cart_ecommerce = require("./product_in_cart_ecommerce");
const _product_in_order_ecommerce = require("./product_in_order_ecommerce");
const _user_ecommerce = require("./user_ecommerce");

function initModels(sequelize) {
  const user_ecommerce = _user_ecommerce(sequelize, DataTypes);
  const product_ecommerce = _product_ecommerce(sequelize, DataTypes);
  const cart_ecommerce = _cart_ecommerce(sequelize, DataTypes);
  const order_ecommerce = _order_ecommerce(sequelize, DataTypes);
  const product_in_cart_ecommerce = _product_in_cart_ecommerce(sequelize, DataTypes);
  const product_in_order_ecommerce = _product_in_order_ecommerce(sequelize, DataTypes);

  user_ecommerce.hasMany(product_ecommerce, { as: "product_ecommerces", foreignKey: "user_id"});
  product_ecommerce.belongsTo(user_ecommerce, { as: "user", foreignKey: "user_id"});
  user_ecommerce.hasMany(cart_ecommerce, { as: "cart_ecommerces", foreignKey: "user_id"});
  cart_ecommerce.belongsTo(user_ecommerce, { as: "user", foreignKey: "user_id"});
  user_ecommerce.hasMany(order_ecommerce, { as: "order_ecommerces", foreignKey: "user_id"});
  order_ecommerce.belongsTo(user_ecommerce, { as: "user", foreignKey: "user_id"});
  cart_ecommerce.hasMany(product_in_cart_ecommerce, { as: "product_in_cart_ecommerces", foreignKey: "cart_id"});
  product_in_cart_ecommerce.belongsTo(cart_ecommerce, { as: "cart", foreignKey: "cart_id"});
  product_ecommerce.hasMany(product_in_cart_ecommerce, { as: "product_in_cart_ecommerces", foreignKey: "product_id"});
  product_in_cart_ecommerce.belongsTo(product_ecommerce, { as: "product", foreignKey: "product_id"});
  order_ecommerce.hasMany(product_in_order_ecommerce, { as: "product_in_order_ecommerces", foreignKey: "order_id"});
  product_in_order_ecommerce.belongsTo(order_ecommerce, { as: "order", foreignKey: "order_id"});
  product_ecommerce.hasMany(product_in_order_ecommerce, { as: "product_in_order_ecommerces", foreignKey: "product_id"});
  product_in_order_ecommerce.belongsTo(product_ecommerce, { as: "product", foreignKey: "product_id"});

  return {
    cart_ecommerce,
    order_ecommerce,
    product_ecommerce,
    product_in_cart_ecommerce,
    product_in_order_ecommerce,
    user_ecommerce,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
