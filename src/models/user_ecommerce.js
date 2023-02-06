const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  return user_ecommerce.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Linda
 *         email:
 *           type: string
 *           example: engriendonos@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: engriendonos@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *       username:
 *         type: string
 *         example: Linda
 *       email:
 *         type: string
 *         example: linda.hp@hotmail.com
 *       token:
 *         type: string
 *         example: wRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 */

class user_ecommerce extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_ecommerce_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (newUser, options) => {
          const { password } = newUser;
          const hash = bcrypt.hashSync(password, 10);
          newUser.password = hash;
      },
  },
    sequelize,
    tableName: 'user_ecommerce',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_ecommerce_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "user_ecommerce_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
