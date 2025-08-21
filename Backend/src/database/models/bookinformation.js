const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = Schema({
  title: {
    type:String
  },
  author: {
    type:String
  },
  ISBN: {
    type:String
  },
  price: {
    type:Number
  }
});

 const bookinformation = mongoose.model("bookinformation", bookSchema);

 module.exports=bookinformation;
