import Home from "./component/Home";
import Restaurants from "./component/Restaurants";
import Items from "./component/Items";
import Search from "./component/Restaurants/Search";
import { BrowserRouter, Routes, Route } from "react-router";
import Shome from "./component/Restaurants/Shome";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<Shome></Shome>}>
            <Route path="/restaurants" element={<Restaurants />}></Route>
            <Route path="/city/chandigarh/:id" element={<Items />}></Route>
            <Route
              path="/city/chandigarh/:id/search"
              element={<Search />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

