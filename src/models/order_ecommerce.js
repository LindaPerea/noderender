const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order_ecommerce.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schema:
 *     createProduct:
 *       type: object
 *       properties:
 *         total_price:
 *           type: double
 *           example: 1500
 *         type:
 *           type: enum
 *           example: pending
 *         user_id:
 *           type: integer
 *           example: 1
 */


class order_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_ecommerce',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
