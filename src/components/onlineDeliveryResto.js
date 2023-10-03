import { resto_online_delivery } from "../utilities/constantURL.js"

const RestarentWithOnlineFood = (props) => {
    const { onlineRestoDelivery } = props
    return (
        <div className="card">
            <div className="card-body">
                <img src={
                    resto_online_delivery + onlineRestoDelivery.info.cloudinaryImageId
                } width={"100%"} height={"200px"} style={{objectFit: ""}} />
                <h6 className="fw-bold mt-2">{onlineRestoDelivery.info.name}</h6>
                <p><i className="bi bi-star-fill"></i> {onlineRestoDelivery.info.avgRating}</p>
                <small>{onlineRestoDelivery.info.cuisines.join(" , ")}</small>
                <small>{onlineRestoDelivery.info.areaName}</small>
            </div>
        </div>
    );
};


export default RestarentWithOnlineFood;