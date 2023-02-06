const models = require('../models');

class UserServices {
  static async getProducts (id){
    try {
      const result = await models.user_ecommerce.findOne({
        where:{id},
        include:{
          model: models.cart_ecommerce,
          as:"carts",
            include:{
            model: models.product_in_cart_ecommerce,
            as:"product_in_carts"
            }
          },
        
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  
  static async withOrders(id) {
    try {
      const result = await models.user_ecommerce.findAll({
        where:{id},
        include:{
          model: models.order_ecommerce,
          as:"orders"
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;