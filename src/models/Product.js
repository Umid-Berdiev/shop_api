const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shop_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
});

schema.plugin(mongoosePaginate);

const Product = mongoose.model("Product", schema);
module.exports = Product;
