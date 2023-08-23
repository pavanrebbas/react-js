import { top_resto_img } from "../utilities/constantURL.js"

const TopRestarentscomponent = (props) => {
    // console.log(props);
    const { restoData } = props;
    console.log(restoData);
    return (
        <div className="TopRestoComponents">
            <img src={
                top_resto_img + restoData.cloudinaryImageId
            } width={"100%"} />
            <h6 className="fw-bold mt-2">{restoData.name}</h6>
            <h6><i className="bi bi-star-fill"></i> {restoData.avgRating}</h6>
            <p>{restoData.cuisines.join(" , ")}</p>
            <small>{restoData.locality}</small>
        </div>
    )

}

export default TopRestarentscomponent;
