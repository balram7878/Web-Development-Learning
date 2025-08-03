const express = require("express");

const router = express.Router();

router.get("/error", (req, res) => {
  try {
    JSON.parse('kfdkf');
    res.send("json parsed successfully");
  } catch (err) {
    res.send("incorrect json", err);
  }
});

module.exports = router;
