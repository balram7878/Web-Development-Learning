import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = React.createElement("h1", {id:"h1",className:"heading",style:{
//     color:"green"
// },key:"zero"}, "this is H1");
// const h2 = React.createElement("h2", {id:"h2",className:"heading",style:{
//     color:"orange"
// },key:"one"}, "this is H2");

//const h3=<h3 key="third" id="H3" className="heading">this is H3</h3>

// let style={
//     backgroundColor:"grey"
// }
// const div = (
//   <>
//     <h1 style={style}>this is H1 heading</h1>
//     <h2 style={style}>this is H2 heading</h2>
//   </>
// );


function H1(){
    return <h1>this is h1</h1>
}
function H2(){
    return <h2>this is h2</h2>
}

const div=(
    <>
    {H1()}
    {H2()}
    </>
)

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(<>
{H1()}
{H2()}
</>);
