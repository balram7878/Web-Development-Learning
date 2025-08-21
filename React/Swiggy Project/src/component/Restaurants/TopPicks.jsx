export default function TopPicks({ carousel }) {
return <>
    {
          carousel?.length>0?(

            
                carousel.map((e) => 
                    {
                const info=e?.dish?.info;
                return (<div key={info?.id} style={{backgroundImage:`url(https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId})`}} className="bg-cover shrink-0 border-2 border-gray-500 bg-center h-82 w-[300px] rounded-xl gap-10">
                    {/* <h1>{info.name}</h1> */}
                </div>)
                    })
            
            ):
      <p>Loading data....</p>
    }
    </>

}
