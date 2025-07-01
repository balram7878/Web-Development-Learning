import { useEffect, useState } from "react";
export default function ColorChanger({name}) {
  console.log("re-render",name);
  const [color, setColor] = useState("white");

  useEffect(() => {
    console.log("useEffect executed");
    document.body.style.backgroundColor = color;
    document.getElementById("container").style.backgroundColor = color;
  }, [color]);

  //   console.log("after useEffect");
  return (
    <>
      <div id="colors">
        <button id="red" onClick={() => setColor("red")}></button>
        <button id="yellow" onClick={() => setColor("yellow")}></button>
        <button id="orange" onClick={() => setColor("orange")}></button>
        <button id="grey" onClick={() => setColor("grey")}></button>
        <button id="violet" onClick={() => setColor("violet")}></button>
      </div>
    </>
  );
}
