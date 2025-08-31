const express = require("express");
const main = require("../database/UserDB");
const User = require("../database/models/User");
const ValidateUser = require("../utils/ValidateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const authUser= require("../middleware/User.Auth");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.get("/get/user",authUser, async (req, res) => {

  try {
    res.send(req.result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/add/user",async (req, res) => {
  ValidateUser(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  try {
    await User.create(req.body);
    res.send("User added successfully");
  } catch (err) {
    res.status(500).json({ error: "User not added: " + err.message });
  }
});

app.post("/login",async (req, res) => {
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

app.patch("/update/user",authUser, async (req, res) => {
  const id = req.result._id;
  const details = req.body;
  try {
    await User.findByIdAndUpdate(id, details, { runValidators: true });
    res.send(`User with id: ${id} updated successfully.`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

main()
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
