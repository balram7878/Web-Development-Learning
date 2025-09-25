import { useState, useEffect } from "react";
import { useParams,Link} from "react-router";
import Recommended from "./Restaurants/Recommended";

export default function FoodCard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [openSections, setOpenSections] = useState({});
  const [isVegOn, setVegOn] = useState(false);
  const [isNonVegOn, setNonVegOn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://nodejs-production-a169.up.railway.app/city/chandigarh/${id}`
        );
        const card = await response.json();

        const arr =
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filterData = arr.filter((item) => "title" in item?.card?.card);

        setData(filterData || []);
        const allSet = {};
        filterData.forEach((_, i) => {
          allSet[i] = true;
        });
        setOpenSections(allSet);
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, [id]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-[80%] max-w-5xl mx-auto flex flex-col items-center py-10 gap-12 ">
      <Link to={`/city/chandigarh/${id}/search`} className="w-[98%] h-13 cursor-pointer bg-gray-200 rounded-2xl relative top-13 flex justify-center  items-center">
        <h1 className="font-bold text-gray-500">Search for dishes</h1>
        <i className="fa-solid fa-magnifying-glass  text-gray-500 font-bold text-xl absolute right-5"></i>
      </Link>

      <div className="flex justify-center items-center gap-5 relative right-104 top-10">
        <div className="w-18 h-10 border-1 border-gray-500 rounded-2xl flex justify-center items-center ">
          <div
            className={`w-12 h-4 rounded-3xl flex  items-center ${
              isVegOn ? "justify-end bg-green-400" : "justify-start bg-gray-400"
            }`}
          >
            <button
              onClick={() => {
                if (isNonVegOn) setNonVegOn(false);
                setVegOn(!isVegOn);
              }}
              className="w-6 h-6 border-1 border-green-400 rounded-lg flex justify-center items-center bg-white"
            >
              <div className="w-3 h-3 rounded-[50%] bg-green-500"></div>
            </button>
          </div>
        </div>
        <div className="w-18 h-10 border-1 border-gray-500 rounded-2xl flex justify-center items-center">
          <div
            className={`w-12 h-4 rounded-3xl flex  items-center ${
              isNonVegOn
                ? "justify-end bg-red-600"
                : "justify-start bg-gray-400"
            }`}
          >
            <button
              onClick={() => {
                if (isVegOn) setVegOn(false);
                setNonVegOn(!isNonVegOn);
              }}
              className="w-6 h-6 border-1 border-red-400 rounded-lg flex justify-center items-center bg-white"
            >
              <div
                className="w-0 h-0 
  border-l-[7px] border-l-transparent 
  border-r-[7px] border-r-transparent 
  border-b-[14px] border-b-red-600"
              ></div>
            </button>
          </div>
        </div>
      </div>
      {data.map((e, i) => {
        return (
          <div
            key={e?.card?.card?.title || i}
            className="w-full flex flex-col gap-6  p-4"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 border-b pb-2 flex-1">
                {e?.card?.card?.title}
              </h1>
              <button
                className="text-3xl px-3 select-none"
                onClick={() => toggleSection(i)}
                aria-label={`Toggle ${e?.card?.card?.title}`}
              >
                {openSections[i] ? "▲" : "▼"}
              </button>
            </div>

            {openSections[i] && (
              <div className="mt-4">
                {e?.card?.card?.itemCards && (
                  <Recommended
                    itemCards={e?.card?.card?.itemCards}
                    isVeg={isVegOn}
                    isNonVeg={isNonVegOn}
                  />
                )}
                {e?.card?.card?.categories && (
                  <Recommended
                    itemCards={e?.card?.card?.categories[0]?.itemCards}
                    isVeg={isVegOn}
                    isNonVeg={isNonVegOn}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
