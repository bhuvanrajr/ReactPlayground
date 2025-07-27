import { RESTO_CARD_IMAGE_URL } from "../utils/Constants";

const MenuList = ({menus}) =>{
    return (
        <div className="w-9/12 justify-between border-b-1 ">
            {
                menus.map(menu =>{
                    return( 
                    <div  key={menu?.card?.info?.id} className="m-2 h-20 shadow flex justify-between">
                        <div>
                        <h3  className="font-sans font-bold text-gray-800" >{menu?.card?.info?.name}</h3>   
                        <h3 className="font-sans font-bold text-gray-500">₹ {menu?.card?.info?.defaultPrice ? menu?.card?.info?.defaultPrice/100 :  menu?.card?.info?.price/100} </h3>
                        <h3 className="font-sans font-bold text-gray-500">{menu?.card?.info?.ratings?.aggregatedRating?.rating} ({menu?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</h3>
                        </div>
                        <div key={menu?.card?.info?.id}>
                            <img className=" w-20 rounded-xl shadow-xl" src={RESTO_CARD_IMAGE_URL + menu?.card?.info?.imageId} />
                        </div>
                    </div>);             
                })
            }
        </div>
    );
}

export default MenuList;