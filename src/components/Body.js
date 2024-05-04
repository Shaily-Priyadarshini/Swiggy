import { useEffect, useState } from "react";
// import restaurants from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body=()=>{
    const[restaurantList,setResturantList]=useState([]);

    // const handleClickButton=()=>{
    //     setResturantList(restaurantList.filter((res)=>res.info.avgRating>4.5));
    //     console.log(restaurantList)
    //     return
    // }
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res= await data.json();
        // console.log
        // const fetchedResturantList=res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        // setResturantList(fetchedResturantList);
        // console.log(restaurantList)
        console.log(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)}

        
    useEffect(()=>{fetchData()},[])


    // console.log(restaurantList)
    return(
        <div className="body">
            <div className="search">
                <input></input>
                <button>Search</button>
                <button onClick={()=>setResturantList(restaurantList.filter((res)=>res.info.avgRating>4.5))}
                > Top Rated Resturants</button>
            </div>
            <div className="resturant">
                {restaurantList.map((rest)=>(<ResturantCard resData={rest} key={rest.info.id}/>))}                
            </div>
        </div>
    );
};

export default Body;