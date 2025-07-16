import { useState } from "react";
import styles from "./INC.module.css"

export default function App() {
    let [count, setCount] = useState(0);


  return (
    <div className={styles.container}>
      <h2>{count}</h2>
      <div className={styles.buttons}>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

