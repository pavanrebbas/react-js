const Menu = () => {

    return (

        <div className="container py-5">
            <h2>Menu page</h2>
            <p>Some restarantes menu items</p>

            <div className="row">


                <div className="col-lg-4 col-md-4 col-4 ">
                    <p className="shimmer-card" ></p>
                    <h1 className="shimmer-content1"></h1>
                    <h1 className="shimmer-content2"></h1>
                </div>

                <div className="col-lg-4 col-md-4 col-4 ">
                    <p className="shimmer-card"></p>
                    <h1 className="shimmer-content1"></h1>
                    <h1 className="shimmer-content2"></h1>
                </div>

                <div className="col-lg-4 col-md-4 col-4 ">
                    <p className="shimmer-card"></p>
                    <h1 className="shimmer-content1"></h1>
                    <h1 className="shimmer-content2"></h1>
                </div>


            </div>
        </div>
    )
};

export default Menu;