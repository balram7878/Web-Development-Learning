const User = require("../database/models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authUser(req, res, next) {
  try {
    const { Token } = req.cookies;
    if (!Token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const payload = jwt.verify(Token, process.env.JWT_TOKEN_KEY);
    const { _id } = payload;
    if (!_id) {
      return res.status(401).json({ error: "Invalid token payload" });
    }
    const result = await User.findOne({ _id });
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    req.result = result;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized: " + err.message });
  }
}

module.exports = authUser;
