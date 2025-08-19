import {FoodData,groceries,restaurant} from "../utils/FoodData"
export default function Body(){

return<>
<div className="flex justify-center items-center w-[100%] flex-col space-y-12">


<div className=" w-[80%] h-[600px] p-[80px] flex  flex-nowrap flex-col justify-center items-center  hide-scrollbar overflow-x-auto overflow-y-hidden">
<div className="flex w-[100%] gap-10 flex-nowrap space-x-10">
   {
    FoodData.map((e,index)=>{
       return <a  target="_blank" key={index} className="block flex-shrink-0" href={e.action.link}><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+e.imageId}  className="h-[220px] w-[170px]"  /></a>

    })
   }
</div>
</div>

  <div className="flex justify-center items-center flex-col w-[80%] gap-10">
<h1 className="font-bold text-3xl self-start">Shop groceries on Instamart</h1>
    <div className="h-[250px] w-[100%] flex flex-nowrap justify-start items-center space-x-10 overflow-x-auto overflow-y-hidden hide-scrollbar color-black font-medium text-justify text-xl font-serif ">
    {
      
   groceries.map((e,index)=>{
  return <a target="_blank" key={index} href={e.action.link} className="flex flex-col flex-shrink-0 items-center text-center"><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+e.imageId}  className="h-[210px] w-[190px] "  />{e.action.text}</a>
  })
    }
</div>
  </div>


<div className="flex justify-center items-center flex-col w-[80%] gap-10 mt-20  ">

  <h1 className="font-bold text-3xl self-start">Discover best restaurants on Dineout</h1>

  <div className=" w-[100%] flex flex-nowrap justify-start items-center space-x-10 h-[500px]  overflow-x-auto overflow-y-hidden hide-scrollbar color-black font-medium text-justify text-xl font-serif ">

    {
      restaurant.map((e,index)=>{
return <a target="_blank" key={index} href={`https://www.swiggy.com/restaurants/${e.info.id}/dineout`}  className="flex flex-col flex-shrink-0 items-center text-center">

      <div className="rounded-2xl  w-[400px] h-[450px] border-1 text-[16px] border-gray-400 ">
        <div className="h-[210px]  rounded-2xl">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+e.info.mediaFiles[0].url} className="w-[100%] h-[210px] rounded-t-2xl" />
          <div className="flex justify-between items-center text-white font-bold relative bottom-15 p-4">
            <h2>{e.info.name}</h2>
           <div  className="flex justify-center items-center gap-1 ">
             <div className="h-[20px] w-[20px] text-center bg-green-500  rounded-[50%] text-xl relative top-0.5">*</div>
            <h2>{e.info.rating.value}</h2>
           </div>
          </div>
        </div>
      <div>

        <div className="mt-2 w-[100%] flex justify-center flex-col p-2 "> 
          <div className="flex justify-between items-center gap-15 text-gray-500 w-[100%] text-lg">
            <p>{e.info.cuisines.join("•")}</p>
            <p>{e.info.costForTwo}</p>
          </div>
            <div className="flex justify-between text-gray-500">
            <p>{e.info.locationInfo.formattedAddress}</p>
            <p>{e.info.locationInfo.distanceString}</p>
          </div>
          <div className=" mt-1 w-[140px] bg-gray-400  text-white h-[30px]  flex justify-center items-center rounded-xl">
            <p>&#128198;Table booking</p>
          </div>
          <div className="mt-4 w-[100%] h-[40px] bg-green-600 self-center rounded-xl flex justify-between items-center p-2 text-white font-bold">
            <p>Flat 20% OFF on pre-booking</p>
            <p>+{e.info.vendorOffer.offerCount} more</p>
          </div>
           <div className="mt-4 w-[100%] h-[40px] bg-[#36d293dc] self-center rounded-xl  flex justify-between items-center p-2 text-white font-bold">
            <p>Up to 10% off with bank offers</p>
          </div>
        </div>

  </div>

</div>
</a>
      })
    }
      

</div>
  </div>

</div>

</>
}