const express = require("express");
const main = require("../database/UserDB");
const User = require("../database/models/User");
const ValidateUser = require("../utils/ValidateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt=require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.get("/get/users", async (req, res) => {
  try {
    const payload=jwt.verify(req.cookies.Token,"himeghfor0");
    console.log(payload)
    const result = await User.find();
  
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/get/user", async (req, res) => {
  try {
    const payload=jwt.verify(req.cookies.Token,"himeghfor0");
    const result = await User.findOne({_id:payload._id});
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/add/user", async (req, res) => {
  ValidateUser(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  try {
    await User.create(req.body);
    res.send("User added successfully");
  } catch (err) {
    res.status(500).json({ error: "User not added: " + err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("invalid credentials email");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("invalid credentials password");
    const token=jwt.sign({_id:user._id,email:user.email},"himeghfor0",{expiresIn:20});
    res.cookie("Token", token);
    res.json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.patch("/update/user/:id", async (req, res) => {
  const id = req.params.id;
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
    app.listen(1234);
  })
  .catch((err) => {
    console.log(err);
  });
