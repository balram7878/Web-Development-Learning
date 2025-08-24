export default function Recommended({ itemCards, isVeg, isNonVeg }) {
  let filteredItems = itemCards;

  if (isVeg) {
     console.log(filteredItems);
    filteredItems = itemCards.filter((e) => e?.card?.info?.isVeg === 1);
     console.log(filteredItems);
  }

  if (isNonVeg) {
  console.log(filteredItems);
    filteredItems = itemCards.filter(
      (e) => e?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
    );
       console.log(filteredItems);
  }
  return (
    <>
      {filteredItems?.length > 0 ? (
        itemCards.map((e) => {
          const info=e?.card?.info;
          return (
            <div
              key={info?.id}
              className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-8 transition-transform hover:scale-[1.01] hover:shadow-lg"
            >
              <div className="flex justify-between items-center gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <h1 className="font-semibold text-2xl text-gray-800">
                    {info.name}
                  </h1>
                  <h2 className="text-lg font-medium text-gray-700">
                    ₹
                    {info?.defaultPrice
                      ? info?.defaultPrice / 100
                      : info?.price / 100}
                  </h2>
                  {info?.ratings?.aggregatedRating?.rating && (
                    <h3 className="font-semibold text-green-600 text-sm">
                      ⭐ {info.ratings.aggregatedRating.rating} (
                      {info.ratings.aggregatedRating.ratingCountV2})
                    </h3>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {info.description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 w-40">
                  <img
                    src={"https://media-assets.swiggy.com/" + info.imageId}
                    alt={info.name}
                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                  <button className="w-32 py-2 px-4 bg-green-500 hover:bg-green-600 transition rounded-lg text-white font-semibold text-sm shadow-md">
                    + ADD
                  </button>
                  <h3 className="text-xs text-gray-500 italic">Customisable</h3>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 text-lg font-medium mt-10">
          Data is Loading...
        </p>
      )}
    </>
  );
}
