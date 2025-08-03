const express = require("express");
const { auth: Auth1, auth1: Auth2 } = require("./middleware/auth");
const { foodItems, cart } = require("./utils/items");
const app = express();

app.use(express.json());

app.use("/food/:token", Auth1);

app.get("/food/:token", (req, res) => {
  res.send(foodItems);
});

app.post("/food/:token", (req, res) => {
  foodItems.push(req.body);
  res.status(201).send("food item added successfully");
});

app.patch("/food/:token", (req, res) => {
  const food = foodItems.find((food) => food.id === req.body.id);
  if (!food) {
    res.status(404).send(`food with this id: ${req.body.id} not available`);
  } else {
    if (req.body.name) food.name = req.body.name;
    if (req.body.price) food.price = req.body.price;
    if (req.body.category) food.category = req.body.category;
    res.status(200).send(`food with id: ${food.id} updated successfully`);
  }
});

app.delete("/food/:token/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = foodItems.findIndex((food) => food.id === id);
  if (index == -1) {
    res.status(404).send(`food with id: ${id} not available`);
  } else {
    foodItems.splice(index, 1);
    res.status(200).send(`food with id: ${id} deleted successfully`);
  }
});

app.get("/cart", (req, res) => {
  if (cart.length == 0) res.send("cart is empty");
  else res.send(cart);
});

app.use("/cart/:id", Auth2);

app.post("/cart/:id", (req, res) => {
  cart.push(foodItems[req.index]);
  res.send(`food with id: ${req.id} added successfully`);
});

app.delete("/cart/:id", (req, res) => {
  const index = req.cartIndex;
  const id=req.id;
  console.log(cart,index);
  cart.splice(index, 1);
  console.log(cart,index);
  res.send(`food with id: ${id} deleted successfully from the cart`);
});

app.listen(1234, () => {
  console.log("listen");
});

module.exports = {
  foodItems,
};
