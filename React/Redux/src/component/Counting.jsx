import {useSelector, useDispatch} from "react-redux";
import {increment,decrement,reset} from "./Slice1";

console.log(increment() )

export default function Counting() {
const count=useSelector((state)=>state.slice.count);
const dispatch=useDispatch();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  );
}
