const RestoCard = ({restoData}) => {
    const{name, avgRating, sla, cuisines, cloudinaryImageId} = restoData?.info;

    return (
        <div className="restoCard">
            <img className="restoCardImage" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
            <h4 className="restoName"> {name} </h4>
            <div>
                <span className="ratings">
                    {avgRating}
                </span>
                <span className="eta">
                    {sla.slaString}
                </span>
            </div>
            <div className="cusines">
                {cuisines.join(", ")}
            </div>
        </div>
    )
}

export default RestoCard