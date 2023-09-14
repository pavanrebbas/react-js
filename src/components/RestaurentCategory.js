import RestaureantCateroryMenuList from "./RestaurentCatergoryMenuList";

const RestarentCategory = (props) => {
    const { data } = props
    // console.log(data)

    return (

        <div className="container">
            <div className="">
                <div className="col  offset-lg-2 offset-md-1">
                    <h5 className="fw-bold my-3 py-3" >{data.title} ({data.itemCards.length}) </h5>

                </div>


                {/* ALL CATERORY MENU LIST COMPONENT */}
                <div>
                    <RestaureantCateroryMenuList data={data.itemCards} />
                </div>
            </div>
        </div>
    )
}

export default RestarentCategory;