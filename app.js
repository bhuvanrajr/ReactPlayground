import Body from "./src/components/Body";
import Header from "./src/components/Header";
import ReactDOM from "react-dom/client"
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer /> 
        </div>
    )
}

const routeConfing = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path:"/",
                element: <Body />

            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contactus",
                element : <ContactUs />
            }
        ],
        errorElement : <ErrorPage />
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={routeConfing} />
)
;