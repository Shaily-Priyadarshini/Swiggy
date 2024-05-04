import { CDN_URL } from "../utils/constants";
const ResturantCard=({resData})=>{
    const {name,cloudinaryImageId,avgRating,cuisines,sla}=resData?.info;
 
    return(
        <div className="restrocard">
        <img className="restroImg" alt="food_image" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h5>⭐{avgRating}</h5>
        <div className="details">
            <span>{cuisines.join(", ")}</span>
            <span>{sla.deliveryTime} mins</span>
        </div>
        </div>
    )
}

export default ResturantCard;