const models = require('../models');
const { cart_ecommerce } = require("../models")


class CartServices {
  static async create(cartUser){
    try {
      const result = await models.cart_ecommerce.create(cartUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  // static async addProduct(newProduct){
  //   try {
  //     const result = await models.product_in_cart_ecommerce.create(newProduct);
  //     const product =await models.product_ecommerce.findOne({where:{id:result.product_id}});
  //     const car = await models.cart_ecommerce.findOne({where:{id:newProduct.cart_id}});
  //     console.log(car)
  //     await models.cart_ecommerce.update({total_price:car.total_price + (product_ecommerce.price*newProduct.quantity)},
  //     {where:{id:newProduct.cart_id}});
  //     await models.product_ecommerce.update({availableqty:product_ecommerce.availableqty - newProduct.quantity},{where:{id:product.id}})
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  
  
  static async addProduct(newProduct){
    try {
      const result = await models.product_in_cart_ecommerce.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartServices;