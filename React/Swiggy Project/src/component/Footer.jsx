export default function Footer(){
    return<>
    
    <img id="app-qr" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
  
   <div className=" bg-gray-200 h-[200px] p-3">
       <hr className=" text-gray-600  m-10"></hr>
 <div className="  flex justify-center items-center gap-15">
        <h2 className="font-bold text-2xl text-gray-500">For better experience, download the Swiggy app now</h2>
       <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" className="transition-transform duration-300 ease-in hover:scale-110 cursor-pointer" ></img></a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" className="transition-transform duration-300 ease-in hover:scale-110 cursor-pointer"  /></a>
    </div>
   </div>
    </>
}