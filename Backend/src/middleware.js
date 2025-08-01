const express = require("express");
const {auth}=require("./middleware/auth")
const app = express();

const foodItems = [
  { id: 1, name: "Paneer Butter Masala", category: "veg", price: 220 },
  { id: 2, name: "Chicken Biryani", category: "non-veg", price: 350 },
  { id: 3, name: "Masala Dosa", category: "veg", price: 120 },
  { id: 4, name: "Mutton Rogan Josh", category: "non-veg", price: 900 },
  { id: 5, name: "Veg Hakka Noodles", category: "veg", price: 150 },
  { id: 6, name: "Fish Curry", category: "non-veg", price: 480 },
  { id: 7, name: "Chole Bhature", category: "veg", price: 130 },
  { id: 8, name: "Egg Fried Rice", category: "non-veg", price: 160 },
  { id: 9, name: "Rajma Chawal", category: "veg", price: 140 },
  { id: 10, name: "Butter Chicken", category: "non-veg", price: 770 },
];
const cart = [];

app.use(express.json());

app.use("/food/:token",auth)

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
app.listen(1234, () => {
  console.log("listen");
});
