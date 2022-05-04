const express = require("express");
const cors = require("cors");
const router = require("./routes/api.js");
const conn = require("./database.js");

conn();

const app = express();
const port = 8888;

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
