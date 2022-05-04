const express = require("express");

const {
  fetchAllShop,
  createShop,
  fetchShopById,
  updateShop,
  deleteShop,
} = require("../controllers/ShopController.js");

const {
  fetchAllProduct,
  createProduct,
  fetchProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController.js");

const router = express.Router();

// shop api
router.get("/shop/all", fetchAllShop);
router.post("/shop/create", createShop);
router.get("/shop/:id", fetchShopById);
router.put("/shop/:id", updateShop);
router.delete("/shop/:id", deleteShop);

// product api
router.post("/product/create", createProduct);
router.get("/product/:id", fetchProductById);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/shop/:id/products/all", fetchAllProduct);

module.exports = router;
