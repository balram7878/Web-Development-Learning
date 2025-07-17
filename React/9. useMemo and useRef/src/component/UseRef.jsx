import styles from "./useRef.module.css";
import { useState, useRef } from "react";


export default function () {
  let [count1, setCount1] = useState(1);
  let obj=useRef(2);
  console.log(obj.current);
  return (
    <>
      <div className={styles.container}>
        <h2>
          {count1} {obj.current}
        </h2>

        <div className={styles.buttons}>
          <button onClick={() => setCount1(count1 + 1)}>+</button>
          <button
            onClick={() => {
              obj.current = obj.current + 2; 
            }}
          >
            ++
          </button>
        </div>
      </div>
    </>
  );
}
