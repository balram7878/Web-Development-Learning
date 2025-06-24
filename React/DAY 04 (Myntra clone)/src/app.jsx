import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Body";
import Header from "./component/Header";
import Footer from "./component/Footer";
import productOffers from "./utils/dummy";

function App() {
  return (
    <>
    <Header/>
    <div id="main">
        <div id="card">
      {productOffers.map((element, index) => (
        <Card key={index} item={element.product} offer={element.offer} image={element.image} />
      ))}
    </div>
    </div>
    <Footer/>
    </>
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
