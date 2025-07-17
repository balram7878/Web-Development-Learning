import { useState, useRef } from "react";
import styles from "./stopwatch.module.css";

export default function Stopwatch() {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null);
  function handleStart() {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSecond(0);
  }

const hours=Math.floor(second/3600);
const minutes=Math.floor((second%3600)/60);
const seconds=second%60;

  return (
    <>
      <div className={styles.stopwatch}>
        <div className={styles.watch}>
          <div className={styles.first}>
            <h1>{String(hours).padStart(2, '0')}</h1>
          </div>
          <div className={styles.second}>
            <h1>{String(minutes).padStart(2, '0')}</h1>
          </div>
          <div className={styles.third}>
            <h1>{String(seconds).padStart(2, '0')}</h1>
          </div>
        </div>
        <div className={styles.btn}>
          <button
            className={`${styles.start} ${styles.b}`}
            onClick={handleStart}
          >
            Start
          </button>
          <button className={`${styles.stop} ${styles.b}`} onClick={handleStop}>
            Stop
          </button>
          <button
            className={`${styles.reset} ${styles.b}`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
