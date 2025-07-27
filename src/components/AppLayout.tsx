import { Outlet } from "react-router"
import UserContext from "../utils/UserContext"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

const AppLayout = () =>{
    const [userNameVal, setUserNameVal] = useState("Bhuvan");

    return (
        <UserContext.Provider value = {{userName: userNameVal, setUserNameVal}} >
        <div>
            <Header/>
            <Outlet />
            <Footer /> 
        </div>
        </UserContext.Provider>
    )
}
export default AppLayout
