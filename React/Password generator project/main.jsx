import { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [SBState, setSBState] = useState(false);
  const [numState, setNumState] = useState(false);

  // const generatePassword = useCallback(() => {
  //   let pass = "";
  //   let passArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (SBState) passArray += "@#!$%^&*()-+={}[]|:;',.?/";
  //   if (numState) passArray += "0123456789";

  //   for (let i = 1; i <= length; i++)
  //     pass += passArray[Math.floor(Math.random() * passArray.length)];
  //   setPassword(pass);
  // },[length,SBState,numState]);

  useEffect(() => {
     let pass = "";
    let passArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (SBState) passArray += "@#!$%^&*()-+={}[]|:;',.?/";
    if (numState) passArray += "0123456789";

    for (let i = 1; i <= length; i++)
      pass += passArray[Math.floor(Math.random() * passArray.length)];
    setPassword(pass);
    // generatePassword();
  }, [length,SBState,numState]);

  return (
    <>
      <div id="container">
        <div className="first">
          <h1>{password}</h1>
        </div>
        <div className="second">
          <input
            type="range"
            id="length"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="8"
            max="20"
          ></input>
          <label htmlFor="length">Length ({length})</label>
          <input
            type="checkbox"
            id="number"
            onChange={() => setNumState((prev) => !prev)}
          ></input>
          <label htmlFor="number">Number</label>
          <input
            type="checkbox"
            id="character"
            onChange={() => setSBState((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
