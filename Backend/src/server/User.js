const express = require("express");
const main = require("../database/UserDB");
const cookieParser = require("cookie-parser");
const authRouter = require("../routes/authUser");
const user = require("../routes/user");
const client = require("../config/redis");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/user", user);

const initializeConnections = async () => {
  try {
    await Promise.all[main(),client.connect()] ;
    console.log("Connected to DBs");
    
    // console.log("connected to redis");
    app.listen(process.env.PORT, () => {
      console.log("server is listeninng");
    });
  } catch (err) {
    console.log(err.message);
  }
};

initializeConnections();


