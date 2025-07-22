const express = require("express");

const app = express();

// app.use("/support/contact", (req, res) => {
//   res.send("COntact page");
// });
// app.use("/person+l", (req, res) => {
//   res.send({ name: "balram", age: 21, gender: "male" });
// });
app.use("/homepage/:id/:user", (req, res) => {
  console.log(req.params)
  res.send("Home Page");
});
// app.use("/support", (req, res) => {
//   res.send("Support page");
// });

// app.use("/", (req, res) => {
//   res.send("default page");
// });

app.listen(8000, () => {
  console.log("listening at 4000 port");
});
