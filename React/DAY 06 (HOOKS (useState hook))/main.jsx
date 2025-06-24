import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    let [state, setState] = useState(0);
//   let state = 0;
  let increment = () => {
    // state++;
    // let h2 = document.querySelector("h2");
    // h2.innerText = `${state}`;
    setState(++state);
  };
  let decrement = () => {
    // state--;
    // let h2 = document.querySelector("h2");
    // h2.innerText = `${state}`; 
    setState(--state);
  };

  return (
    <div id="container">
      <h2>{state}</h2>
      <div id="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
