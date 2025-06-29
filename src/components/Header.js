import { useState } from "react";
import { Link } from "react-router";

const Header = () =>{
    const [loginText, setLoginText] = useState("Login");
return (
        <div className = "header">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA79CgtM5Rf7a7CF3joHWd0dy3prVyjagRQ&s" />
        <ul className="navItems">
            <li>
                <Link to={"/"} >Home</Link>
            </li>
            <li>
                <Link to={"/about"} >About</Link>
            </li>
            <li>
                <Link to={"/contactus"} >Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="btnLogin" onClick={()=>{
                (loginText === "Login")? setLoginText("Logout") : setLoginText("Login");
            }}>{loginText}</button>
        </ul>
        </div>
    )
};

export default Header;