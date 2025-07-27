import RestoCard, { StarRatedRestoCard } from "./RestoCard"
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/Constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const RestoCardContainer = () =>{
    const [restList, setRestList] = useState<any[]>([]);
    const [filteredRestData, setFilteredRestdata] = useState<any[]>([]);
    const [filterText, setFilterText] = useState("");
    const {userName, setUserNameVal} = useContext(UserContext);

    const fetchData = async ()=>   {
        const response = await fetch(SWIGGY_API);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    useEffect(() =>{
        fetchData()
    },[]);

    const StarRatedResto = StarRatedRestoCard();

    return filteredRestData.length === 0 ? <Shimmer /> : (
        <>
        <div className="shadow-2xl flex space-x-10 border-amber-100 bg-white rounded-2xl h-15">
            <div className="py-3">
                <input type="text" className="border-1 rounded-xs mx-2" value={filterText} 
                onChange={(e) => { setFilterText(e.target.value)}} />
                <button className="rounded-sm w-15 h-8 shadow-2xl bg-orange-500" onClick={() =>{
                    const result = restList.filter(rest => rest?.info?.name.toLowerCase().includes(filterText.toLowerCase()));
                    setFilteredRestdata(result);
                }} > Search</button>
            </div>
            <div className="my-3 rounded-sm shadow-2xl w-45 h-8 px-3 py-0.5 bg-orange-500">
                <button onClick={ () => {
                    const data = filteredRestData.filter(data => data?.info?.avgRating > 4.2);
                    return setFilteredRestdata(data);
                }} >Filter Best Restaurants</button>
            </div>
            <div className="py-3">
                <input className="border-1 rounded-xs mx-2 p-1" value={userName} onChange ={(e)=>{setUserNameVal(e.target.value)}}></input>
            </div>
        </div>
        <div className="flex flex-wrap space-x-2 space-y-2 justify-center m-2 bg-white rounded-xl">
            {
                filteredRestData.map(restaurant => {
                    if(restaurant.info.avgRating < 4.4 )
                    {
                        return (
                        <Link to={"/restomenu/"+restaurant?.info?.id} key = {restaurant?.info?.id} > 
                        <RestoCard restoData = {restaurant} />                        
                        </Link>)
                    }
                    else
                    {
                        return (
                        <Link to={"/restomenu/"+restaurant?.info?.id} key = {restaurant?.info?.id} > 
                        <StarRatedResto restoData = {restaurant} />                        
                        </Link>)
                    }
                }
                )
            }
        </div>
        </>
    )
}

export default RestoCardContainer