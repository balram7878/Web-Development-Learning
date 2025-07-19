import ReactDOM from "react-dom/client";
import Increment from "./component/Increment";
import Decrement from "./component/Decrement";
import context from "./component/Global";
import { useContext, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(context); 
  return (
    <>
      <h2>{count}</h2>
      <context.Provider value={{count,setCount}}>
        <Increment />
        <Decrement />
      </context.Provider>
    </>
  );
}  

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
