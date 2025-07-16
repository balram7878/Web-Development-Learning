import { useState, useEffect } from "react";

function fib(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  else return fib(num - 1) + fib(num - 2);
}

export default function Fibonnaci() {
  const [num, setNum] = useState(1);
  const [fb, getFib] = useState(0);

  return (
    <>
      <h2>Find Fibonnaci Number</h2>
      <div id="fContainer">
        <h2>{fb}</h2>
        <input
          placeholder="Search here"
          type="number"
          onChange={(e) => setNum(parseInt(e.target.value))}
        ></input>
        <button
          id="search"
          onClick={() => {
            getFib(fib(num));
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
