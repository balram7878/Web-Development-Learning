const express = require("express");

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id:3,
    title:"Beyond Stars",
    author:"Balram Meena"
  },
  {
    id:4,
    title:"Turning Points",
    author:"Balram Meena"
  }
];

// APIs end point
app.get("/book", (req, res) => {
 
  if(req.query.author){
    const book=books.filter(book=>book.author===req.query.author)
    res.send(book)
  }
  else
  res.send(books);

});

app.get("/book/:id", (req, res) => {

  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) res.send(book);
  else res.send(`${id} not found`);
});

//APIs end point
app.post("/book", (req, res) => {
  // console.log(req.body);
  books.push(req.body);
  // console.log(books);
  res.send("your book data saved successfully");
});

app.put("/book", (req, res) => {
  const id = parseInt(req.body.id);
  const index = books.findIndex((book) => book.id === id);
  if(index!=-1){
    books[index]={
      id:id,
      title:req.body.title,
      author:req.body.author
    }
    res.status(404).send(`Book with id: ${id} replced successfully`);
  }
  else
    res.status(404).send(`Book with id: ${id} not found`);
});
app.patch("/book",(req,res)=>{
const id=parseInt(req.body.id); 
const book=books.find(book=>book.id===id);
if(book){
if(req.body.title) book.title=req.body.title
if(req.body.author) book.author=req.body.author
res.send(`Book with id: ${id} updated successfully`);
}
else
  res.status(404).send(`Book with id: ${id} not found`)
})
app.listen(1234, () => {
  console.log("listen on 1234 port");
});

app.delete("/book/:id",(req,res)=>{
const id=parseInt(req.params.id);
const index=books.findIndex(book=>book.id===id)
if(index!=-1){
books.splice(index,1);
res.send(`Book with id: ${id} deleted successfully.`);
}
else
  res.status(404).send(`Book with id: ${id} not found.`)
})