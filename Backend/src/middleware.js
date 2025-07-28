const express = require("express");
const fs = require("fs");

const app = express();

app.use("/user", (req, res, next) => {
  const logEntry = `${new Date().toISOString()} | ${req.url} | ${req.method}\n`;
  fs.appendFile("server.log", logEntry, (err) => {
    if (err) console.log("Logging failed: ", err);
  });
  next();
});

app.get("/user", (req, res) => {
  res.send("infomation get");
});
app.post("/user", (req, res) => {
  res.send("infomation created");
});
app.delete("/user", (req, res) => {
  res.send("infomation deleted");
});

app.listen(1234);
