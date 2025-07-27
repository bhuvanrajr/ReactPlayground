import { useState } from "react";
import MenuList from "./MenuList";

const MenuCategory = ({item, displayMenus, handleIndex}) =>{
    return(
    <div key = {item?.card?.card?.categoryId} className="w-9/12 m-4 place-items-center" >
        <div className="w-9/12 h-10 m-4 shadow-xl flex justify-between cursor-pointer"
            onClick={()=>{
                handleIndex();
            }}> 
            <h3 className="font-semibold">{item?.card?.card?.title}</h3>
            <h3>🔻</h3>
        </div>
    {   
    (displayMenus) ?
    
        <MenuList key = {item?.card?.card?.categoryId}   menus = {item?.card?.card?.itemCards} />
    :
        <></>
        }
    </div>   
    );
}

export default MenuCategory