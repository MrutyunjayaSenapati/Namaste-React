import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>
    {
      const{resData}=props;
      const {name,avgRating,cuisines,sla }=resData?.card ?.card ?.info;
      console.log(props);
      return(
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}} >
          <img className="res-logo" 
          src={CDN_URL+ resData.card.card.info.cloudinaryImageId}/>
          <div className="innerContainer">
          <h3> {name}</h3>
          <h5>{cuisines.join(" ,")} </h5>
          <h5>{avgRating}</h5>
          <h5>{sla.deliveryTime}</h5>
          </div>
  
        </div>
      ) 
    }
    export default RestaurantCard;