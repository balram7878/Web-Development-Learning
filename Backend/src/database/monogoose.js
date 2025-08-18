const mongoose=require("mongoose");


async function main() {

    //connect with cluster and create database
  await mongoose.connect(
    "mongodb+srv://bmeena97562:9928296711@cluster0.uwrialx.mongodb.net/BookStore"
  );


  //create the first item in the collection
//   const book1 = new BookInformation({
//     title: "Beyond Saturn",
//     author: "Balram Meena",
//     ISBN: "34JDDOSKD92",
//     price: 2000,
//   });

//   //store the item created in the collection
//   await book1.save();

//   await BookInformation.create({
//     title:"The Road Ahead",
//     author:"Balram Meena",
//     ISBN:"JDN03494",
//     price:1500,
//   })

//   await BookInformation.insertMany([
 
//   {
//     title: "The Pragmatic Programmer",
//     ISBN: "978-0135957059",
//     author: "Andrew Hunt, David Thomas",
//     price: 42.99
//   },
//   {
//     title: "Clean Code",
//     ISBN: "978-0132350884",
//     author: "Robert C. Martin",
//     price: 37.95
//   },
//   {
//     title: "JavaScript: The Good Parts",
//     ISBN: "978-0596517748",
//     author: "Douglas Crockford",
//     price: 29.99
//   },
//   {
//     title: "You Don't Know JS Yet: Scope & Closures",
//     ISBN: "978-1098117698",
//     author: "Kyle Simpson",
//     price: 24.99
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     ISBN: "978-0201633610",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     price: 54.95
//   }


//   ])

}


module.exports=main;