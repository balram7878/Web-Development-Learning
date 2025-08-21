export default function Recommended({ itemCards }) {
    // console.log(itemCards)
  return (
    <>
     {
        itemCards?.length>0?(itemCards.map((e) => {
            const info=e?.card?.info;
            return (<>
                <div className="flex justify-between w-[100%] items-center gap-10 " key={info?.id}>
                        <div className="flex gap-2 flex-col" key={459439532345}>
                            <h1 className="font-bold text-xl">{info.name}</h1>
                            <h2>₹{info?.price/100}</h2>
                            <h3 className="font-bold text-green-600">{info?.ratings?.aggregatedRating?.rating} ({info?.ratings?.aggregatedRating?.ratingCountV2})</h3>
                            <p className="text-gray-400 text-lg">{info.description}</p>
                        </div>
                        <div className="text-center flex gap-1 flex-col justify-center items-center" key={459234395345}>
                            <img src={"https://media-assets.swiggy.com/"+info.imageId} className="w-51 h-45" />
                            <button className="text-green-600 font-bold text-xl border-2 rounded-xl w-30 h-12">ADD</button>
                            <h3>Customisable</h3>
                        </div>
                    </div>
                    <hr key={info?.id+"jjj"} className="w-[100%] h-2 text-gray-400 m-5"></hr>
                    </>
            )
        }
    )
        ):<p>Data is Loading....</p>
    }
    </>
  );
}
