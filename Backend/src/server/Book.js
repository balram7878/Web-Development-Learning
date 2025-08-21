const express = require("express");
const main = require("../database/Books");
const Books = require("../database/models/bookinformation");

const app = express();

app.use(express.json());

app.post("/add/book", async (req, res) => {
  try {
    await Books.create(req.body);
    res.send(`${req.body} added successfully.`);
  } catch (err) {
    res.status(500).send(`${req.body} not added in database`);
  }
});

app.get("/get/books", async (req, res) => {
  try {
    const books = await Books.find();
    res.send(books);
  } catch (err) {
    res.status(500).send(`get error to fetch books from the DB`);
  }
});

app.get("/get/book/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const book = await Books.find({ title: title });
    res.send(book);
  } catch (err) {
    res.status(500).send("error " + err);
  }
});

app.delete("/delete/book/:id", async (req, res) => {
  try {
    await Books.findByIdAndDelete(req.params.id);
    res.send(`Deleted succcessfully`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.patch("/update/book",async (req,res)=>{
const {id,...update}=req.body; 
  try{
    await Books.findByIdAndUpdate(id,update)
    res.send(`book with id: ${id} updated successfully`);
  }catch(err){
  res.status(500).json({error:err})
}
})

main()
  .then(() => {
    console.log("Connected to DB");
    app.listen(1234);
  })
  .catch((err) => console.log(err));
