import { useState } from "react"

const useIsAppOnline = () =>{
    const [isAppOnline, setIsAppOnline] = useState(true);

    window.addEventListener("online", (event)=>{
        setIsAppOnline(true);
    });

    window.addEventListener("offline", (event) => {
        setIsAppOnline(false);
    })

    return isAppOnline;
}

export default useIsAppOnline;