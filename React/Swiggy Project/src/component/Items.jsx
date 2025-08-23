import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Recommended from "./Restaurants/Recommended";

export default function FoodCard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5678/city/chandigarh/${id}`
        );
        const card = await response.json();

        const arr =
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filterData = arr.filter(
          (item) => "title" in item?.card?.card
        );

        setData(filterData || []);
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, [id]);


  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,[index]: !prev[index],
    }));
  };

  return (
    <div className="w-[80%] max-w-5xl mx-auto flex flex-col items-center py-10 gap-12">
      {data.map((e, i) => (
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
              <Recommended itemCards={e?.card?.card?.itemCards} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
