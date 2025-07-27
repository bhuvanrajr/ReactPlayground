import { useParams } from "react-router";
import useRestoDetails from "../utils/useRestoDetails";
import MenuList from "./MenuList";
import { useState } from "react";
import MenuCategory from "./MenuCategory";


const RestoMenuCard = () =>{
    
    const {restId} = useParams();
    const restoDetails = useRestoDetails(restId);
    const {name, costForTwoMessage, avgRating, cuisines, totalRatingsString} = restoDetails?.data?.cards[2]?.card?.card?.info || {};
    const [showIndex, setShowIndex] = useState<number | null>(null);

    const itemsCards = restoDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (itemsCards == undefined)? <></> : (
        <div className=" place-items-center">
            <h3 className=" font-black text-orange-600">{name}</h3>
            <h4 className="font-bold">{costForTwoMessage}</h4>
            <h5 className="font-semibold">{cuisines?.join(", ")}</h5>
            <h5 className="font-semibold">🏅 {avgRating} ({totalRatingsString})</h5>
            {
            itemsCards?.map((item, index) =>
                {
                    return (
                        <MenuCategory key={index} item = {item} 
                            displayMenus = {index == showIndex && true} 
                            handleIndex = {() => 
                                {
                                    if(index==showIndex)
                                    {
                                        return setShowIndex(-1);
                                    }
                                    else
                                        return setShowIndex(index)
                            }}/>
                );
                })
            }
        </div>
    )
}

export default RestoMenuCard;