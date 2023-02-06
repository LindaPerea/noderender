const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cart_ecommerce.init(sequelize, DataTypes);
}

class cart_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_ecommerce',
        key: 'id'
      }
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cart_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cart_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
