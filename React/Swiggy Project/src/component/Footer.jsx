import {citiesWithFoodDelivery,citiesWithGroceriesDelivery} from "../utils/FoodData";
export default function Footer() {
  return (
    <>
      <img id="app-qr" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>

        <div className="flex flex-col w-[80%] mx-52 my-20">
            <h2 className="font-bold text-3xl mb-8">Cities with food delivery</h2>
            <div className="flex w-full gap-4 flex-wrap justify-start">
                {citiesWithFoodDelivery.map((e, index) => (
                    <a target="_blank" key={index} href={e.link} className="border-gray-400 h-18 w-72 border-[1px] flex items-center justify-center rounded-2xl p-2">{e.text}</a>
                ))}
            </div>
        </div>

          <div className="flex flex-col w-[80%] mx-52 my-20">
            <h2 className="font-bold text-3xl mb-8">Cities with grocery delivery</h2>
            <div className="flex w-full gap-4 flex-wrap justify-start">
                {citiesWithGroceriesDelivery.map((e, index) => (
                    <a target="_blank" key={index} href={e.link} className="border-gray-400 h-18 w-72 border-[1px] flex items-center justify-center rounded-2xl p-2">{e.text}</a>
                ))}
            </div>
        </div>

      <div className=" bg-gray-200 h-[300px] p-3">
     <div className="w-full flex justify-center items-center flex-col my-4">
           <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" />
        <h3 className="text-gray-600 text-lg m-3">&copy; Swiggy Limited</h3>
     </div>
        <hr className=" text-gray-600  m-10"></hr>
        <div className="  flex justify-center items-center gap-15">
          <h2 className="font-bold text-2xl text-gray-500">
            For better experience, download the Swiggy app now
          </h2>
          <a target="_blank" href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              className="transition-transform duration-300 ease-in hover:scale-110 cursor-pointer"
            ></img>
          </a>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              className="transition-transform duration-300 ease-in hover:scale-110 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
}
