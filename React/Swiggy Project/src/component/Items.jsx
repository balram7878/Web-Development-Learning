import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Recommended from "./Restaurants/Recommended";
// import TopPicks from "./Restaurants/TopPicks";

export default function FoodCard() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5678/city/chandigarh/${id}`
        );
        const card = await response.json();

        const arr =
          card?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const filterData = arr.filter((item) => "title" in item?.card?.card);

        setData(filterData || []);
      } catch (err) {
        console.error("data not fetched " + err);
      }
    })();
  }, [id]);

  if (!isOpen) {
    return (
      <div
        key={459439345}
        className="w-[60%] flex justify-center items-center flex-col m-auto"
      >
        {data.map((e) => {
          return (
            <div
              key={e?.card?.card?.title}
              className="flex justify-center items-center w-[100%] flex-col"
            >
              <h1 className="font-bold text-3xl relative right-102">
                {e?.card?.card?.title}
              </h1>
              <button onClick={() => setOpen(true)}>⌄</button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      key={4594395}
      className="w-[60%] flex justify-center items-center flex-col m-auto"
    >
      {data.map((e) => {
        return (
          <div
            key={e?.card?.card?.title}
            className="flex justify-center items-center w-[100%] flex-col"
          >
            <h1 className="font-bold text-3xl relative right-102">
              {e?.card?.card?.title}
            </h1>
            <button onClick={() => setOpen(false)}>˄</button>
            <Recommended itemCards={e?.card?.card?.itemCards} />
          </div>
        );
      })}
    </div>
  );
}
