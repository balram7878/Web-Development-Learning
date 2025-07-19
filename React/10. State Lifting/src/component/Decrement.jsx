import context from "./Global";
import { useContext } from "react";
import Divide from "./Divide";
export default function Decrement() {
  const { count, setCount } = useContext(context);
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Divide />
    </>
  );
}
