import { useDispatch, useSelector } from "react-redux";
import RestaureantCateroryMenuList from "./RestaurentCatergoryMenuList";
import { clearItems } from "../utilities/cartSlice";
import { Link } from "react-router-dom";



const Cart = () => {

    const cardItems = useSelector((store) => store.cart.items);
    console.log(cardItems)


    const dispatch = useDispatch()

    ///////////// DELETE ITEMS IN A CART/////////////
    const handleDeletItmes = () => {
        dispatch(clearItems())

    }

    return (
        <>
            <div className="container text-center my-5 pt-3">

                {
                    cardItems.length == 0 && <img width={"20%"} height={"20%"} src="https://static.vecteezy.com/system/resources/previews/016/026/442/original/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" />


                } <br></br> <br></br>

                {
                    cardItems.length == 0 && <h5 className="fw-bold">Your cart is empty</h5>
                }

                {
                    cardItems.length == 0 && <small>You can go to home page to view more restaurants</small>
                }<br></br> <br></br>


                {/* MENU LIST TO ADD INTO CART THAT SHOWS */}
                <RestaureantCateroryMenuList items={cardItems}></RestaureantCateroryMenuList>

                {
                    cardItems.length == 0 ?  
                        <Link to="/"> <button className="cart-button fw-bold" id="empty">SEE RESTAURANTS NEAR YOU</button></Link> :
                        <div className="text-center">
                            <button className="cart-button fw-bolder" id="empty" onClick={handleDeletItmes}>clear cart</button>
                        </div>
                }
            </div>
        </>
    )
};

export default Cart;