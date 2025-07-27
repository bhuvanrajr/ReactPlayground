import { useEffect, useState } from "react";
import {SWIGGY_RESTMENU_API} from "./Constants";


const useRestoDetails = (restId) =>{
    const [restoDetails, setRestoDetails] = useState<any | null>();
    const fetchRestoMenuData = async() =>{
            const data = await fetch(SWIGGY_RESTMENU_API+restId);
            const result = await data.json();
            setRestoDetails(result);
        }
    useEffect(()=>{
        fetchRestoMenuData();
    }, []);
    return restoDetails;
}

export default useRestoDetails;