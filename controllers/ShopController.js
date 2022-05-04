const { default: mongoose } = require("mongoose");
const Shop = require("../models/Shop.js");

const fetchAllShop = async (request, response) => {
  const shops = await Shop.find();

  response.status(200).json(shops);
};

const createShop = async (request, response) => {
  const { name } = request.body;
  const newShop = await Shop.create({
    name,
  });

  response.status(200).json({
    message: "success",
    data: newShop,
  });
};

const fetchShopById = async (request, response) => {
  console.log(request.params);
  const shopId = request.params.id;

  try {
    if (mongoose.Types.ObjectId.isValid(shopId)) {
      const foundShop = await Shop.findById(shopId);
      response.status(200).json(foundShop);
    }
  } catch (error) {
    response.json({
      message: "failed",
      data: error.message + ", or not valid",
    });
  }
};

const updateShop = async (request, response) => {
  const shopId = request.params.id;
  const { name } = request.body;

  await Shop.findByIdAndUpdate(shopId, { name });
  response.status(200).send(`Shop with id ${shopId} is modified!`);
};

const deleteShop = async (request, response) => {
  const shopId = request.params.id;
  await Shop.findByIdAndDelete(shopId);
  response.status(200).send(`Shop with id ${shopId} is deleted!`);
};

module.exports = {
  fetchAllShop,
  createShop,
  fetchShopById,
  updateShop,
  deleteShop,
};
