import { Outlet } from "react-router"
import UserContext from "../utils/UserContext"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"

const AppLayout = () =>{
    const [userNameVal, setUserNameVal] = useState("Bhuvan");

    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{userName: userNameVal, setUserNameVal}} >
            <div>
                <Header />
                <Outlet />
                <Footer /> 
            </div>
            </UserContext.Provider>
        </Provider>
    )
}
export default AppLayout
