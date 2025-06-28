 import Body from "./src/components/Body";
import Header from "./src/components/Header";
 import ReactDOM from "react-dom/client"
 
 
const AppLayout = () =>{
    return (
        <div>
            <Header/>
            <Body />
            <Footer /> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppLayout />
)
;