import context from "./Global";
import { useContext } from "react";
export default function Multiply() {
const {count,setCount}=useContext(context);
  return (
    <>
      <button onClick={() => setCount(count * count)}>* {count}</button>
    </>
  );
}
