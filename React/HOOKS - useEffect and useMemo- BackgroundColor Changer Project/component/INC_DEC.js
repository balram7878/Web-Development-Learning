import { useState } from "react"

export default function INC_DEC(){

const [count,setCount]=useState(0);

return(
 <div id="container">
      <h2>{count}</h2>
      <div id="buttons">
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
)
}