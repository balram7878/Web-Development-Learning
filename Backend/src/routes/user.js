const express=require("express");
const User = require("../database/models/User");
const authUser=require("../middleware/User.Auth");
const userRouter=express.Router();

userRouter.get("/details",authUser, async (req, res) => {

  try {
    res.send(req.result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.patch("/update",authUser, async (req, res) => {
  const id = req.result._id;
  const details = req.body;
  try {
    await User.findByIdAndUpdate(id, details, { runValidators: true });
    res.send(`User with id: ${id} updated successfully.`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports=userRouter;