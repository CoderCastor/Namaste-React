import { resData } from "../utils/mochData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="s earch">Search</div>
            <div className="res-container">
                {resData.map(rest=><RestaurantCard data={rest} />)}          
            </div>

        </div>
    )
}

export default Body;