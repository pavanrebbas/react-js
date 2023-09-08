import { top_resto_img } from "../utilities/constantURL.js"

const TopRestarentscomponent = (props) => {
    // console.log(props);
    const { restoData } = props;
    // console.log(restoData);
    return (
        <div className="card">
            <div className="card-body">
                <img src={
                    top_resto_img + restoData.info.cloudinaryImageId
                } width={"100%"} />
                <h6 className="fw-bold mt-2">{restoData.info.name}</h6>
                <h6><i className="bi bi-star-fill"></i> {restoData.info.avgRating}</h6>
                <p>{restoData.info.cuisines.join(" , ")}</p>
                <small>{restoData.info.locality}</small>
            </div>
        </div>
    )

}

export default TopRestarentscomponent;
