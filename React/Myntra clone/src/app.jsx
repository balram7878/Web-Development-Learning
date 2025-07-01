import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import productOffers from "./utils/dummy";

function App() {
  let [array, setArray] = useState(productOffers);
  function sort() {
    let sortedArray = [...array].sort((a, b) => a.price - b.price);
    setArray(sortedArray);
  }
  function seeAbove500() {
    let newArr = array.filter((element) => element.price > 3000);
    setArray(newArr);
  }
  return (
    <>
      <Header />
      <div id="main">
        <div id="btn">
          <button  onClick={sort}>
          Filter by Price
        </button>
        <button  onClick={seeAbove500}>
          See Above 3000 $
        </button>
        </div>
        <div id="card">
          {array.map((element, index) => (
            <Main
              key={index}
              item={element.product}
              offer={element.offer}
              image={element.image}
              price={element.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
