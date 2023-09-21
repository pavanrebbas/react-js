import { useState } from "react";
import RestaureantCateroryMenuList from "./RestaurentCatergoryMenuList";

const RestarentCategory = (props) => {
    const { data } = props
    // console.log(data)

    let [click, setClick] = useState(true)

    const clickFun = () => {
        // setClick(true)

        setClick(!click)
    }

    return (

        <div className="container">
            <div className="row my-4">
                <div className="col-lg-6 col-md-6 col offset-md-2 offset-lg-3"  >
                    <h5 className="fw-bold my-3 py-2 p-1" style={{ cursor: "pointer", backgroundColor : "rgba(226, 226, 231, 1)" }} onClick={clickFun}>{data.title} ({data.itemCards.length}) <i className="bi bi-chevron-up mx-5"></i></h5>
                    
                </div>



                {/* ALL CATERORY MENU LIST COMPONENT */}
                <div>
                    {click && <RestaureantCateroryMenuList data={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestarentCategory;