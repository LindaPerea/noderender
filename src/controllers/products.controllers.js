const ProductServices = require("../services/product.services");

const addProducts = async (req, res) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.add(newProduct)
            res.status(201).json({mesagge: "product created"});
    } catch (error) {
        res.status(400).json({mesagge: "somethingn wrong"});
    };
};

const getProducts = async (req,res) => {
    try {
      const result = await ProductServices.get();
      res.json(result);
    } catch (error) {
      res.status(400).json({message:'something wrong'});
    }
  }

module.exports = {
    addProducts,
    getProducts
}