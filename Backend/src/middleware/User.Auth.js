const User = require("../database/models/User");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  try {
    const { Token } = req.cookies;
    if (!Token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const payload = jwt.verify(Token, "himeghfor0");
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
