const h1 = React.createElement("h1", {id:"h1",className:"heading",style:{
    color:"green"
}}, "this is H1");
const h2 = React.createElement("h2", {id:"h2",className:"heading",style:{
    color:"orange"
}}, "this is H2");

const div=React.createElement("div",{},[h1,h2]);
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(div);
 