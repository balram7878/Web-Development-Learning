import Multiply from "./Multiply";
import context from "./Global";
import { useContext } from "react";
export default function Increment() {
  let { count, setCount } = useContext(context);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+ {count}</button>
      <Multiply/>
    </>
  );
}
