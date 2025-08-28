
import { useState } from "react";
export default function Header() {
  const [cartItem,setCartItem]=useState(0);
  return (
    <>
      <div className="bg-[#ff5200] h-22 w-full relative flex justify-between items-center p-10">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              className="h-[48px] w-[160px]"
            />

        <div className="flex justify-center items-center  flex-col">
            <div className="h-13 w-13 border-2 border-white rounded-lg flex justify-center items-center ">
          <h1 className="font-bold text-white text-2xl" >{cartItem}</h1>
        </div>
        <h2 className="font-bold text-white text-lg">Cart</h2>
        </div>
      </div>
    </>
  );
}
