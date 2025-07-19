import context from "./Global";
import { useContext } from "react";
export default function Divide() {
 const  {count,setCount}=useContext(context);
  return (
    <>
      <button onClick={() => setCount(count / count)}>/</button>
    </>
  );
}
