import { useState, useMemo, useCallback } from "react";
import styles from "./useMemo.module.css";

export default function App() {
  let [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  // const [fb, getFib] = useState(0);

  const fib = useCallback((num) => {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fib(num - 1) + fib(num - 2);
  }, []);

  const result = useMemo(() => {
    return fib(num);
  }, [num]);

  return (
    <>
      <h2>Find Fibonnaci Number</h2>
      <div id="fContainer">
        <h2>{result}</h2>
        <input
          placeholder="Search here"
          type="number"
          onChange={(e) => setNum(parseInt(e.target.value))}
        ></input>
        {/* <button
          id="search"
          onClick={() => {
            getFib(fib(num));
          }}
        >
          Search
        </button> */}
      </div>
      <div className={styles.container}>
        <h2>{count}</h2>
        <div className={styles.buttons}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </>
  );
}
