import Home from "./component/Home";
import Restaurants from "./component/Restaurants";
import { BrowserRouter, Routes, Route, Link } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
