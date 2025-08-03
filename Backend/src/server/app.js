const express=require("express");
const adminRoutes=require("../routes/admin");
const userRoutes=require("../routes/userCart");
const error=require("../routes/error");

const app = express();
app.use(express.json());

app.use("/",adminRoutes);
app.use("/",userRoutes);
app.use("/",error);

app.listen(1234,()=>{
  console.log("listen");
})