import { top_resto_img } from "../utilities/constantURL";

const RestaureantCateroryMenuList = (props) => {
    const { data } = props

    return (

        <div className="container">

            {
                data.map((List_Item) =>

                    <div className="row offset-lg-2 offset-md-1">
                        <div className="col">
                            <i class="bi bi-record-btn"></i>
                            <h6>{List_Item.card.info.name}</h6>
                            <p><i className="bi bi-currency-rupee"></i> {List_Item.card.info.price / 100}</p>
                        </div>

                        {/* CATERORY MENU ITEM IMAGES */}
                        <div className="col">
                            <img src={top_resto_img + List_Item.card.info.imageId} className="rounded-2"></img>
                        </div>
                        <hr className="my-3"/>
                    </div>


                )}

        </div >
    )




};

export default RestaureantCateroryMenuList;