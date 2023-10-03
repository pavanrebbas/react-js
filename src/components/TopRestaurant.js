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
                } width={"100%"} height={"200px"} />
                <h6 className="fw-bold mt-2">{restoData.info.name}</h6>
                <h6><i className="bi bi-star-fill"></i> {restoData.info.avgRating}</h6>
                <p>{restoData.info.cuisines.join(" , ")}</p>
                <small>{restoData.info.areaName}</small>
            </div>
        </div>
    )

};



/************* HIGHER ORDER FUNCTION *************/
export const oneFreeDelivery = (TopRestarentscomponent) => {
    return (props) => {
        return (
            <div>
                <label className="bg-success text-white">one free delivery</label>
                <TopRestarentscomponent {...props}/>
            </div>
        )
    }
};


export default TopRestarentscomponent;

