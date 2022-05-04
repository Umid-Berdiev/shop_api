const mongoose = require("mongoose");
const { config } = require("dotenv");

const conn = () => {
  try {
    config();
    // Mongo DB conncetion
    const database = process.env.MONGOLAB_URI;
    const conn = mongoose.connect(database, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("e don connect");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
