import RestoCard from "./RestoCard"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/Constants";

const RestoCardContainer = () =>{
    const [restList, setRestList] = useState<any[]>([]);
    const [filteredRestData, setFilteredRestdata] = useState<any[]>([]);
    const [filterText, setFilterText] = useState("");
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
    console.log(restList);
    return filteredRestData.length === 0 ? <Shimmer /> : (
        <>
        <div className="filterContainer">
            <div className="search">
                <input type="text" className="searchInput" value={filterText} onChange={(e) => {
                    setFilterText(e.target.value)
                }} />
                <button className="searchBtn" onClick={() =>{
                    const result = restList.filter(rest => rest?.info?.name.toLowerCase().includes(filterText.toLowerCase()));
                    setFilteredRestdata(result);
                }} > Search</button>
            </div>
            <div className="filter-btn">
                <button onClick={ () => {
                    const data = filteredRestData.filter(data => data?.info?.avgRating>4.5);
                    return setFilteredRestdata(data);
                }} >Filter Best Restaurants</button>
            </div>
        </div>
        <div className="restoCardContainer">
            {
                filteredRestData.map(restaurant => {
                    return <RestoCard key = {restaurant?.info?.id} restoData = {restaurant} />
                }
                )
            }
        </div>
        </>
    )
}

export default RestoCardContainer