const express = require("express");
const { auth: Auth1} = require("../middleware/auth");
const { foodItems} = require("../utils/data");

const router=express.Router();

router.use("/food/:token", Auth1);

router.get("/food/:token", (req, res) => {
  res.send(foodItems);
});

router.post("/food/:token", (req, res) => {
  foodItems.push(req.body);
  res.status(201).send("food item added successfully");
});

router.patch("/food/:token", (req, res) => {
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

router.delete("/food/:token/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = foodItems.findIndex((food) => food.id === id);
  if (index == -1) {
    res.status(404).send(`food with id: ${id} not available`);
  } else {
    foodItems.splice(index, 1);
    res.status(200).send(`food with id: ${id} deleted successfully`);
  }
});



module.exports = router;
