const { foodItems, cart } = require("../utils/data");
const auth = (req, res, next) => {
  const token = parseInt(req.params.token);
  if (token === 23) {
    next();
  } else res.status(401).send("authentication required");
};

const auth1 = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = foodItems.findIndex((food) => food.id === id);
  if (index === -1) return res.status(404).send("food is not available");
  if (req.method == "POST") {
    const food = foodItems[index];
    if (cart.includes(food))
      return res.status(400).send("no duplicate item allowed");
  }
  if (req.method == "DELETE") {
    if (cart.length == 0) return res.status(404).send("cart is empty");
    const cartIndex = cart.findIndex((food) => food.id === id);
    if (cartIndex === -1)
      return res.status(404).send("food is not availbale in cart");
    req.cartIndex=cartIndex;
  }

  req.id = id;
  req.index = index;
  next();
};

module.exports = {
  auth,
  auth1,
};
