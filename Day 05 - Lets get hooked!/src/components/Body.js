import { resData } from "../utils/mochData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react"

const Body = () => {

    const [resList,setResList] = useState(resData);
    const onClickHome = () => {
        setResList(resData);
    }
    const onClickNearestRest = () => {
        setResList(resList.filter(res=>res.image > 210))
    }
    return (
        <div className="body">
            <button onClick={onClickHome} className="search">Home</button>
            <button onClick={onClickNearestRest} className="search">Nearby Restaurants</button>
            <div className="res-container">
                {resList.map(rest=><RestaurantCard data={rest} />)}          
            </div>

        </div>
    )
}

export default Body;