import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Recommended from "./Restaurants/Recommended";

export default function FoodCard() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5678/city/chandigarh/${id}`
        );
        const card = await response.json();
        // console.log("card: "+card)
        const arr =
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          // console.log("arr:"+arr)
        const filterData = arr.filter((item) => "title" in item?.card?.card);
        // console.log(filterData)
        setData(filterData || []);
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, []);
// console.log(data[1]?.card?.card?.itemCards)
  return (
    <div className="w-[60%] flex justify-center items-center flex-col ml-70">
      {<Recommended itemCards={data[1]?.card?.card?.itemCards} />}
    </div>
  );
}
