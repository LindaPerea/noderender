const CartServices = require('../services/cart.services');

const addProductAtCart = async(req,res) => {
  try {
   const {id} = req.params;
   const {quantity, price, product_id} = req.body;
   const newProduct = { quantity, price, cart_id:id , product_id};
   console.log(newProduct)
   const result = await CartServices.addProduct(newProduct);
   
   res.status(201).json({message:'Product add to cart'})
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {addProductAtCart};