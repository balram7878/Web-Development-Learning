const express = require("express");
const main = require("../database/UserDB");
const User = require("../database/models/User");

const app = express();
app.use(express.json());

app.get("/get/users", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/add/user", async (req, res) => {
  const mandatoryFields = ["name", "age", "gender", "email"];
  const isAllowed=mandatoryFields.every(e=>Object.keys(req.body).includes(e));
  if(!isAllowed)
    throw new Error("mandatory fields are missing");
  try {
    await User.create(req.body);
    res.send("User added successfully");
  } catch (err) {
    res.status(500).json({ error: "User not added: " + err.message });
  }
});

app.patch("/update/user/:id", async (req, res) => {
  const id = req.params.id;
  const details = req.body;
  try {
    await User.findByIdAndUpdate(id, details, { runValidators: true });
    res.send(`User with id: ${id} updated successfully.`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

main()
  .then(() => {
    console.log("Connected to DB");
    app.listen(1234);
  })
  .catch((err) => {
    console.log(err);
  });
