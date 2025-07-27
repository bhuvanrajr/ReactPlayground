import {RESTO_CARD_IMAGE_URL} from "../utils/Constants";

const RestoCard = ({restoData}) => {
    const{name, avgRating, sla, cuisines, cloudinaryImageId} = restoData?.info;
    return (
        <div className="w-60 m-2 place-items-center">
            <img className="w-max rounded-xl shadow-xl" src= { RESTO_CARD_IMAGE_URL+ cloudinaryImageId }/>
            <div className=" ">
                <h4 className="text-orange-600 w-max font-semibold"> {name} </h4>
            </div>
            <div>
                {
                    avgRating > 4.5 ? 
                    (
                    <span className="font-semibold text-green-700">
                    🏅 {avgRating} ratings
                    </span>) : 
                    (
                    <span className="font-semibold text-gray-800">
                    🏅 {avgRating} ratings
                    </span>
                    )
                }
                
            </div>
            <div>
                <span className="font-medium">
                    eta : {sla.slaString}
                </span>
            </div>
            <div className="italic">
                {cuisines.join(", ")}
            </div>
        </div>
    )
}

export const StarRatedRestoCard = () =>{
    return ({restoData}) =>{
        return <div>
            <div className=" absolute bg-orange-600 text-white font-medium italic">Highly rated!</div>
            <RestoCard restoData = {restoData} />
        </div>
    }
}

export default RestoCard