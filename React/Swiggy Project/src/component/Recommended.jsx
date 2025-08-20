import { useState, useEffect } from "react";
import { useParams } from "react-router";


export default function FoodCard() {

  
const {id}=useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:5678/city/chandigarh/${id}`);
        const card = await response.json();
        setData(
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards || []
        );
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, []);
  return (
   <div className="flex justify-center items-center flex-col ">
   {
    data.map((item)=>{
        const info=item?.card?.info;
         return <div key={info?.id} className="flex items-start justify-between border-b gap-6 border-gray-200 p-4">

      <div className="flex flex-col space-y-1">

        <h2 className="text-lg font-semibold text-gray-800">
          {info?.name}
        </h2>

        <p className="text-base font-medium text-gray-900"></p>

        <div className="flex items-center space-x-1">
          <span className="text-green-600 font-semibold">
            ★ {info?.ratings?.aggregatedRating?.rating}
          </span>
          <span className="text-sm text-gray-500">(16)</span>
        </div>

        <p className="text-sm text-gray-600 max-w-md">
          {info?.description}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +info?.imageId}
          alt="Whopper Burger"
          className="w-24 h-24 object-cover rounded-md"
        />

        <button className="px-6 py-1 text-green-600 border border-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-white transition">
          ADD
        </button>
        <span className="text-xs text-gray-500">Customisable</span>
      </div>
    </div>
    })
   }
   
   
   </div>
  );
}
