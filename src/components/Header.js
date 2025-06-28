import { useState } from "react";

const Header = () =>{
    const [loginText, setLoginText] = useState("Login");
return (
        <div className = "header">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA79CgtM5Rf7a7CF3joHWd0dy3prVyjagRQ&s" />
        <ul className="navItems">
            <li>Home</li>
            <li>Menu</li>
            <li>Search</li>
            <li>Cart</li>
            <button className="btnLogin" onClick={()=>{
                (loginText === "Login")? setLoginText("Logout") : setLoginText("Login");
            }}>{loginText}</button>
        </ul>
        </div>
    )
};

export default Header;