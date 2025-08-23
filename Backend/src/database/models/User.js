const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    age: {
      type: Number,
      min: 18,
      max: 60,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      validate(value) {
        if (!["male", "female", "others"].includes(value))
          throw new Error("Invalid gender");
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
 );

const User = mongoose.model("User", userSchema);

module.exports = User;
