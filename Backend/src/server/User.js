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
    res.status(500).json({error:err.message});
  }
});

app.post("/add/user",async (req,res)=>{
    try{
       await User.create(req.body);
        res.send("User added successfully");
    }catch(err){
        res.status(500).json({error:"User not added: "+err.message});
    }
})



main()
  .then(() => {
    console.log("Connected to DB");
    app.listen(1234);
  })
  .catch((err) => {
    console.log(err);
  });
