import Home from "./component/Home";
import Restaurants from "./component/Restaurants";
import Items from "./component/Items"; 
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
          <Route path="/city/chandigarh/:id" element={<Items/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
