import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./src/Body";

const productOffers = [
  { product: "Shirt", offer: "40% OFF" },
  { product: "T-Shirt", offer: "Buy 1 Get 1 FREE" },
  { product: "Jeans", offer: "Flat ₹500 OFF" },
  { product: "Shoes", offer: "60% OFF" },
  { product: "Sneakers", offer: "Up to 70% OFF" },
  { product: "Hoodie", offer: "Extra 10% OFF" },
  { product: "Jacket", offer: "50% OFF Today Only" },
  { product: "Watch", offer: "₹200 Cashback" },
  { product: "Sunglasses", offer: "Buy 2 Get 1 Free" },
  { product: "Backpack", offer: "30% OFF" },
  { product: "Cap", offer: "Limited Time: ₹199 " },
];

function App() {
  return (
    <div id="card">
      {productOffers.map((element, index) => (
        <Card key={index} item={element.product} offer={element.offer} />
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
