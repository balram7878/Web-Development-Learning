const express = require("express");
const main = require("../database/UserDB");
const cookieParser = require("cookie-parser");

require("dotenv").config();
 const authRouter=require("../routes/authUser");
 const user=require("../routes/user");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRouter);
app.use("/user",user);




main()
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
