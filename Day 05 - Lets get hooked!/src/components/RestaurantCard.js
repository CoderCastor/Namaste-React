import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name,cuisines,delivery,price,distance,image} = props.data;
    
    console.log(props.data)

    return (
        <div className="res-card">
            <img className="res-logo" src={IMG_URL+image} />
            <h3>{name}</h3>  
            <h4>{cuisines.join(" | ")}</h4>
            <h4>{distance}</h4>
            <h4>Rs.{image}</h4>
        </div>
    )
}

export default RestaurantCard;
