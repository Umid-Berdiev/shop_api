const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Product = require("./Product");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// schema.methods.products = function () {
//   const thisId = this.id;
//   return Product.find({ shop_id: thisId });
// };

schema.plugin(mongoosePaginate);

const Shop = mongoose.model("Shop", schema);
module.exports = Shop;
