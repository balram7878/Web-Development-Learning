import { useEffect,useState } from "react"
// const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.730231845869277&lng=76.77189049002534&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING?");
// const data=await response.json();



export default function FoodDelivery(){
const [data,setData]=useState([]);

useEffect(()=>{
    async function fetchData() {
        const proxy="https://cors-anywhere.herokuapp.com/";
        const API="https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.730231845869277&lng=76.77189049002534&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING?";
        const response=await fetch(proxy+API);
        const obj=await response.json();
        setData(obj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    fetchData();
},[]);


    return<>
    
 <div className="flex justify-center items-center">
<div className="flex justify-center items-center flex-wrap gap-10 p-10 w-[90%]">
    {
        data.map((e,index)=>{
            return <img  key={index} className="w-[320px] h-[210px] rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.info.cloudinaryImageId} />

        })
    }
  
</div>
<div>
    <h2></h2>
    <p></p>
    <p></p>
    <p></p>
</div>

 </div>
    
    </>

}



