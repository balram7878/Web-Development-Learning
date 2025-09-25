import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router";

export default function Restaurants() {
  const [data, setData] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("https://nodejs-production-a169.up.railway.app/restaurants");
      const obj = await response.json();

      console.log(obj);

      const restaurants =
        obj?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setData(restaurants);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  fetchData();
}, []);

if(data.length===0)
  return <Shimmer/>

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-wrap gap-10 p-10 w-[90%]  ">
        {data.map((e, index) => {
          return (
         <Link key={e?.info?.id} to={"/city/chandigarh/"+e.info.id}>
            <div
              className="w-[320px] rounded-xl shadow-lg overflow-hidden transform transition duration-200 hover:scale-95"
            >
              <img
                className="w-full h-[210px] object-cover"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  e.info.cloudinaryImageId
                }
                alt={e.info.name}
              />
              <div className="p-3">
                <h2 className="font-bold text-lg">{e.info.name}</h2>
                <p className="text-gray-600 text-sm">
                  {e.info.cuisines?.join(", ")}
                </p>
                <p className="text-yellow-600 font-semibold">
                  ⭐ {e.info.avgRating}
                </p>
                <p className="text-gray-500 text-sm">{e.info.areaName}</p>
              </div>
            </div>
         </Link>
          );
        })}
      </div>
    </div>
  );
}
