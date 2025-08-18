const express = require("express");
const main = require("../database/monogoose");
const bookinformation = require("../database/models/bookinformation");

const app = express();

app.use(express.json());

app.get("/info", async (req, res) => {
  const details = await bookinformation.find({});
  res.send(details);
});

app.post("/info", async (req, res) => {
  try {
    await bookinformation.create(req.body);
    res.send(`${req.body} added successfully`);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/info", async (req, res) => {
  const name = req.query.title;
    try {
    const result=await bookinformation.deleteOne({
      title:name
    });
    if(result.deletedCount==0){
      res.send(`${name} is not found in database`)
    }
    res.send(`${name} is deleted successfully`);
  } catch (err) {
    res.send(err);
  }
});
main()
  .then(() => console.log("connected to DB"))
  .then(() => {
    app.listen(1234, () => console.log("listen on port 1234"));
  })
  .catch((err) => console.log(err));
