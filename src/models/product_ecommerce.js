const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  return product_ecommerce.init(sequelize, DataTypes);
}


/**
 * @openapi
 * components:
 *   schema:
 *     addProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: sombrilla
 *         price:
 *           type: double
 *           example: 150
 *         availableqty:
 *           type: int
 *           example: 3
 *         user_id:
 *           type: int
 *           example: 2
 */

class product_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    availableqty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_ecommerce',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
