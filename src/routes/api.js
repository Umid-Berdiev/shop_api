const express = require("express");

const ShopController = require("../controllers/ShopController.js");

const ProductController = require("../controllers/ProductController.js");

const router = express.Router();

// shop api
router.get("/shop/all", ShopController.fetchAllShop);
router.post("/shop/create", ShopController.createShop);
router.get("/shop/:id", ShopController.fetchShopById);
router.put("/shop/:id", ShopController.updateShop);
router.delete("/shop/:id", ShopController.deleteShop);

// product api
router.post("/product/create", ProductController.createProduct);
router.get("/product/all", ProductController.fetchAllProduct);
router.get("/product/:id", ProductController.fetchProductById);
// router.put("/product/:id", ProductController.updateProduct);
// router.delete("/product/:id", ProductController.deleteProduct);
router.get("/product/filter/:id", ProductController.fetchProductsByShopId);

module.exports = router;
