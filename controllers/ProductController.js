const { default: mongoose } = require("mongoose");
const Product = require("../models/Product.js");

const fetchAllProduct = async (request, response) => {
  const products = await Product.find();

  response.status(200).json(products);
};

const createProduct = async (request, response) => {
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
};

const fetchProductById = async (request, response) => {
  console.log(request.params);
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
};

const updateProduct = async (request, response) => {
  const productId = request.params.id;
  const { name } = request.body;

  await Product.findByIdAndUpdate(productId, { name });
  response.status(200).send(`Product with id ${productId} is modified!`);
};

const deleteProduct = async (request, response) => {
  const productId = request.params.id;
  await Product.findByIdAndDelete(productId);
  response.status(200).send(`Product with id ${productId} is deleted!`);
};

module.exports = {
  fetchAllProduct,
  createProduct,
  fetchProductById,
  updateProduct,
  deleteProduct,
};
