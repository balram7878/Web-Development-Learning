const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = Schema({
  title: String,
  author: String,
  ISBN: String,
  price: Number,
});

 const bookinformation = mongoose.model("bookinformation", bookSchema);

 module.exports=bookinformation;
