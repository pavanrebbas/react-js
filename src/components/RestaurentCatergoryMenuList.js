import { top_resto_img } from "../utilities/constantURL";

const RestaureantCateroryMenuList = (props) => {
    const { data } = props

    return (

        <div className="container ">

            {
                data.map((List_Item) =>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 col offset-lg-3 offset-md-2">
                            <i class="bi bi-record-btn"></i>
                            <h6>{List_Item.card.info.name}</h6>
                            <p><i className="bi bi-currency-rupee"></i> {List_Item.card.info.price / 100}</p>
                        </div>

                        {/* CATERORY MENU ITEM IMAGES */}
                        <div className="col-lg-5 col-md-6 col">
                            <img src={top_resto_img + List_Item.card.info.imageId} className="rounded-2"></img>
                            {/* <button className="btn btn-success">Add</button> */}
                            
                        </div>
                        <hr className="my-3 col-lg-6 col-12   offset-lg-3 "/>
                        {/* <p className="border border-2 black">kk</p> */}
                       
                    </div>

                )}

        </div >
    )




};

export default RestaureantCateroryMenuList;