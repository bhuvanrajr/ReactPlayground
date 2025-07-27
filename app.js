import Body from "./src/components/Body";
import Header from "./src/components/Header";
import ReactDOM from "react-dom/client"
import AppLayout from "./src/components/AppLayout";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestoMenuCard from "./src/components/RestoMenuCard";
import { lazy, Suspense } from "react";
import UserContext from "./src/utils/UserContext";




const Grocery = lazy(() => import("./src/components/Grocery"));

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
            },
            {
                path : "/restomenu/:restId",
                element : <RestoMenuCard />
            },
            {
                path : "/grocery",
                element :   <Suspense fallback = {(<h3>Loading...</h3>)}>
                                <Grocery /> 
                            </Suspense>
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