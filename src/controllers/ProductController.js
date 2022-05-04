const { default: mongoose } = require("mongoose");
const Product = require("../models/Product.js");

const ProductController = {
  fetchAllProduct: async (request, response) => {
    const products = await Product.paginate();

    response.status(200).json(products);
  },

  createProduct: async (request, response) => {
    const { name, shop_id, description } = request.body;
    const newProduct = await Product.create({
      name,
      shop_id,
      description,
    });

    response.status(200).json({
      message: "success",
      data: newProduct,
    });
  },

  fetchProductById: async (request, response) => {
    const productId = request.params.id;

    try {
      if (mongoose.Types.ObjectId.isValid(productId)) {
        const foundProduct = await Product.findById(productId);
        response.status(200).json(foundProduct);
      }
    } catch (error) {
      response.json({
        message: "failed",
        data: error.message + ", or not valid",
      });
    }
  },

  updateProduct: async (request, response) => {
    const productId = request.params.id;
    const { name } = request.body;

    await Product.findByIdAndUpdate(productId, { name });
    response.status(200).send(`Product with id ${productId} is modified!`);
  },

  deleteProduct: async (request, response) => {
    const productId = request.params.id;
    await Product.findByIdAndDelete(productId);
    response.status(200).send(`Product with id ${productId} is deleted!`);
  },

  fetchProductsByShopId: async (request, response) => {
    const shop_id = request.params.id;
    const products = await Product.find({ shop_id });
    response.status(200).json(products);
  },
};

module.exports = ProductController;
