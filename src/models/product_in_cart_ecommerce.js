const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product_in_cart_ecommerce.init(sequelize, DataTypes);
}


/**
 * @openapi
 * components:
 *   schema:
 *     addProductToCart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: string
 *           example: 150
 *         cart_id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 2
 */

class product_in_cart_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart_ecommerce',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product_ecommerce',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'product_in_cart_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_in_cart_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
