
const { product_ecommerce } = require('../models');
const models = require('../models');

class OrderServices {
  static async create(id){
    try {
      const cartUser = await models.cart_ecommerce.findOne({where:{user_id:id}});
      const newOrder = {user_id:id,total_price:cartUser.total_price};
      const result = await models.order_ecommerce.create(newOrder);
      const productCart = await models.product_in_cart_ecommerce.findAll({
        where:{cart_id:cartUser.id}
      });
      productCart.forEach(async arrayProd =>{
        const {product_id, quantity} = arrayProd
        const product = await models.product_ecommerce.findOne({
          where:{id: arrayProd.product_id}
        });
        await models.product_in_order_ecommerce.create({
          product_id,quantity,order_id:result.id, price:product_ecommerce.price
        });
        await models.product_in_cart_ecommerce.destroy({
          where:{cart_id:cartUser.id}
        });
      })
      return result;
    } catch (error) {
      throw error;
    }
   };
  }

 

module.exports = OrderServices;