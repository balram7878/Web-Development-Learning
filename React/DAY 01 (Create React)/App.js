let React = {
  createElement: function (tag, property, children) {
    const e = document.createElement(tag);
    for (let key in property) e.style[key] = property[key];
    if (typeof children == "string") e.innerText = children;
    else if (typeof children == "object") 
      for (let i of children) e.append(i);
    return e;
  },
};

let ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

const e = React.createElement(
  "h1",
  { color: "blue", backgroundColor: "green" },
  "H1"
);
const root = document.getElementById("root");

ReactDOM.render(e, root);
ReactDOM.render(React.createElement("p", {}, "p"), root);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");

ReactDOM.render(React.createElement("ul", {}, [li1, li2, li3]),root);
