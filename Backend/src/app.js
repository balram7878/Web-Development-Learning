const express = require("express");

const app = express();

app.use(express.json());

const books = [
  {
    id:1,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
  {
    id:2,
    title: "Atomic Habits",
    author: "James Clear",
  },
];

// APIs end point
app.get("/book", (req, res) => {
  res.send(books);
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(
    (book) => book.id === id
  );
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

app.listen(1234, () => {
  console.log("listen on 1234 port");
});
