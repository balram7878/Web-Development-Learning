export default function Header() {
    return (
        <>
            <div className="bg-[#ff5200] h-screen w-full relative">
       
                <div className="w-screen p-4 flex justify-evenly items-center h-[80px] fixed top-6">
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                        className="h-[48px] w-[160px]"
                    />
                    <div className="flex justify-center items-center gap-12">
                        <button className="outline-none text-white font-bold text-xl">Swiggy Corporate</button>
                        <button className="outline-none text-white font-bold text-xl">Partner with us</button>
                        <button className="border border-white rounded-xl h-[55px] w-[150px] text-white font-bold text-lg">Get the app</button>
                        <button className="text-white bg-black rounded-xl h-[55px] w-[140px] font-bold text-xl">Sign in</button>
                    </div>
                </div>

    
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                    className="h-[450px] w-[250px] absolute top-[100px] left-0"
                />
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                    className="w-[250px] h-[450px] absolute top-[100px] right-0"
                />

         
                <div className="absolute top-[200px] flex justify-center items-center flex-col gap-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-[800px] text-center">
                        <h1 className="text-white font-bold text-5xl">
                            Order food & groceries. Discover best restaurants. Swiggy it!
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                       
                      <div className="h-[65px] w-[340px] bg-white rounded-xl flex justify-center items-center gap-3 font-bold text-lg text-gray-500 outline-none">
                          <i className="fa-solid fa-location-dot  text-[#FF5200] font-bold text-xl"></i>
                         <input placeholder="Enter your delivery location" className="outline-none"></input>
                         
                        <select>
                            <option></option>
                        </select>
                      </div>
                        <div className="h-[65px] w-[484px] bg-white rounded-xl p-4 font-bold text-lg text-gray-800 outline-none">
                            <input
                            placeholder="Search for restaurant, item or more"
                            className="h-full w-[90%] outline-none"
                        />
                         <i className="fa-solid fa-magnifying-glass text-xl text-gray-500"></i>
                        </div>
                    </div>
                </div>

                {/* Bottom Images */}
                <div className="flex justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 gap-4">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" className="w-[340px] h-[310px]" />
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" className="w-[340px] h-[310px]" />
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" className="w-[340px] h-[310px]" />
                </div>
                    </div>
        </>
    );
}
