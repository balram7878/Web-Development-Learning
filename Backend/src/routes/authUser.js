const express=require("express");
const User = require("../database/models/User");
const bcrypt = require("bcrypt");
const ValidateUser = require("../utils/ValidateUser");


const authRouter=express.Router();

authRouter.post("/register",async (req, res) => {
  ValidateUser(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  try {
    await User.create(req.body);
    res.send("User added successfully");
  } catch (err) {
    res.status(500).json({ error: "User not added: " + err.message });
  }
});

authRouter.post("/login",async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("invalid credentials");
    const isMatch = await user.verifyPassword(password); 
    if (!isMatch) throw new Error("invalid credentials");
    const token = user.generateJWT();
    res.cookie("Token", token);
    res.json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports=authRouter;