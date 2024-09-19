import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
  const arr=useState(resList);
// const [listOfRestaurants, setListOfRestaurant]=useState(resList);
const listOfRestaurants=arr[0];
const setListOfRestaurant=arr[1];
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.card.card.info.avgRating > 4 );setListOfRestaurant(filteredList);}}>Top Rated Restaurants</button></div>
        <div className="res-container">
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>

      <RestaurantCard resName="Pizzahurt" cuisine="North Indian" rating="4.3"/> */}
      {
        listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.id} resData={restaurant} />)

      }

        </div>

      </div>
    )
  }
  export default Body;