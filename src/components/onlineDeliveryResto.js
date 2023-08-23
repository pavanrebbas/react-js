import { resto_online_delivery } from "../utilities/constantURL.js"

const RestarentWithOnlineFood = (props) => {
    const { onlineRestoDelivery } = props
    return (
        <div className="RestarentWithOnlineFood">
            <img src={
                resto_online_delivery + onlineRestoDelivery.cloudinaryImageId
            } width={"100%"} />
            <h6 className="fw-bold mt-2">{onlineRestoDelivery.name}</h6>
            <p><i className="bi bi-star-fill"></i> {onlineRestoDelivery.avgRating}</p>
            <p>{onlineRestoDelivery.cuisines}</p>
            {/* <p>{onlineRestoDelivery.areaName}</p> */}
        </div>
    );
};


export default RestarentWithOnlineFood;