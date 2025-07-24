const express = require("express");

const app = express();

app.use(express.json() )

app.get("/", (req, res) => {
  res.send({name:"John"});
});

app.post("/", (req, res) => {
  res.send("send new data to the server");
  console.log(req.body)
});
// app.patch("/", (req, res) => {
//   res.send("update part of the existing data");
// });
// app.put("/", (req, res) => {
//   res.send("update existing data (full replace)");
// });
// app.delete("/", (req, res) => {
//   res.send("data deleted successfully"); 
// });
app.listen(1234, () => {
  console.log("listen on 1234 port");
});
