import { Routes, Route, BrowserRouter, Link  } from "react-router";
import ReactDOM from "react-dom/client";
import Contact from "./component/Contact";
import Support from "./component/Support";
import Homepage from "./component/Homepage";
import Email from "./component/Email";
import Mobile from "./component/Mobile";
import Github from "./component/Github";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="Contact">Contact</Link>
      <Link to="/Github">Github</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Contact" element={<Contact/>}>
        <Route index element={Support()}></Route>
        <Route path="Email" element={<Email/>}></Route>
        <Route path="Mobile" element={<Mobile/>}></Route>
        </Route>
        <Route path="/Github/:user" element={<Github/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
