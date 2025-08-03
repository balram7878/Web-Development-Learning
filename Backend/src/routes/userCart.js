const express = require("express");
const { auth1: Auth2} = require("../middleware/auth");
const { foodItems,cart} = require("../utils/data");

const router=express.Router();

router.get("/cart", (req, res) => {
  if (cart.length == 0) res.send("cart is empty");
  else res.send(cart);
});

router.use("/cart/:id", Auth2);

router.post("/cart/:id", (req, res) => {
  cart.push(foodItems[req.index]);
  res.send(`food with id: ${req.id} added successfully`);
});

router.delete("/cart/:id", (req, res) => {
  const index = req.cartIndex;
  const id=req.id;
  console.log(cart,index);
  cart.splice(index, 1);
  console.log(cart,index);
  res.send(`food with id: ${id} deleted successfully from the cart`);
});

module.exports=router;

