const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  //connect with cluster and create database
  console.log(process.env.CONNECTION_STRING_DB);
  await mongoose.connect(process.env.CONNECTION_STRING_DB);
}

module.exports = main;
