import { useState, useEffect } from "react";
import { useParams,Link } from "react-router";
import Recommended from "./Recommended";

export default function Search() {
  const [query, setQuery] = useState("");
  const [data,setData]=useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5678/city/chandigarh/${id}`
        );
        const card = await response.json();
        const arr =
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const filterData = arr.filter((item) => "title" in item?.card?.card);
        setData(filterData);
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, [id]);



  return (
   <div className="w-full flex justify-center items-center">
     <div className="w-[70%] h-13 p-5 bg-gray-200 rounded-2xl relative top-13 flex justify-center items-center">
      <Link to={`/city/chandigarh/${id}`}><i className="fa-solid fa-arrow-left-long"></i></Link>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for dishes"
        className="w-full  text-lg p-2 rounded-lg outline-none"
      />
      <i className="fa-solid fa-magnifying-glass  text-gray-500 font-bold text-xl absolute right-5"></i>
    </div>
   </div>
  );
}
