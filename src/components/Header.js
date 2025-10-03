import { useState, useContext } from "react";
import { Link } from "react-router";
import useIsAppOnline from "../utils/useIsAppOnline";
import { LOGO_IMAGE_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../utils/PageRefreshSlice";

const Header = () =>{
    const [loginText, setLoginText] = useState("Login");
    const isOnline = useIsAppOnline();
    const {userName} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const UpdatePageRefresh = () =>{
        dispatch(updateState(1));
    }



return (
        <div className = "flex justify-between border-amber-100 rounded-2xl m-1 shadow-2xl">
        <img className="w-20 m-2" src= {LOGO_IMAGE_URL} />
        <ul className="flex">
            <li className="m-4 py-4">
                {isOnline? (<div className="text-green-600">Online</div>) : (<div className="text-red-500">Offline</div>)}
            </li>
            <li className="m-4 py-4 font-bold text-orange-600 underline" >
                <Link to={"/"} onClick={UpdatePageRefresh} >Home</Link>
            </li>
            <li className="m-4 py-4 font-bold text-orange-600 underline">
                <Link to={"/about"} >About</Link>
            </li>
            <li className="m-4 py-4 font-bold text-orange-600 underline">
                <Link to={"/contactus"} >Contact Us</Link>
            </li>
            <li className="m-4 py-4 font-bold text-orange-600 underline">
                <Link to={"/grocery"} >Grocery</Link>
            </li>
            <li className="m-4 py-4">
                <span className="font-bold text-orange-600 underline">Cart </span> 
                <span className="font-bold text-orange-800">({cartItems.length} items)</span>
            </li>
            <li className="m-4 py-2 font-medium text-orange-600 underline">
                <button className="p-2 border-1 rounded-xl " onClick={()=>{
                    (loginText === "Login")? setLoginText("Logout") : setLoginText("Login");
                }}>{loginText}</button>
            </li>
            <li className="m-4 py-4 font-medium text-orange-600">
                {userName}
            </li>
        </ul>
        </div>
    )
};

export default Header;