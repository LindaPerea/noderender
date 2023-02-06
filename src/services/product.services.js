const models = require("../models");

class ProductServices {
    static async add(newProduct) {
        try {
            const result = await models.product_ecommerce.create(newProduct);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async get (){
        try {
          const result = await models.product_ecommerce.findAll({
            include:{
              model: models.user_ecommerce,
              as:"user",
              attributes:["username"]
            }
          })
          return result.filter(res=>res.availableqty > 0);
        } catch (error) {
          throw error;
        }
      }
    
}

module.exports = ProductServices;