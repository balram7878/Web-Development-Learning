import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router";

import Home from "./component/Home";
import Landing from "./component/Landing";
import Contact from "./component/Contact";
import Details from "./component/Details";
import Hi from "./component/Hi";
import Hello from "./component/Hello";
import Zero from "./component/Zero";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/details" element={<Details />}>
            <Route index element={<Zero />}></Route>
            <Route path="hi" element={Hi()}></Route>
            <Route path="hello" element={<Hello />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
