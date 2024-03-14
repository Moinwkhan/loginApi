require("dotenv").config();
const mongoose = require("mongoose");

const connect = async (uri) => {
  console.log("Connected to server");
  await mongoose.connect(uri);
};

module.exports = connect;
