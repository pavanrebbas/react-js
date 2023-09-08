const Cart = () =>{

    return(

        <div className="container py-5">
            <h2>Cart</h2>
            <p>There are some products in this cart</p>

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

export default Cart;