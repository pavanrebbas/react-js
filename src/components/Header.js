import { useContext, useState } from "react";
import { logo_Img } from "../utilities/constantURL";
import { Link } from "react-router-dom";
import UserDetails from "../utilities/userDetails";
import { useSelector } from "react-redux";


const HeaderComponet = () => {


    const [btnName, updadtedBtnName] = useState("login")

    const details = useContext(UserDetails)
    // console.log(details)


    // SUBSCRIBING BY USING (SELECTORS) TO GET THE LENGTH OF THE CART ITEMS LIKE CART(0)
    const cardItems = useSelector((store) => store.cart.items)
    console.log(cardItems)

    return (
        < nav class="navbar navbar-expand-lg  sticky-top Header-componet" >
            <div class="container">
                <img src={logo_Img} width={"6%"}></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link"> Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about"> <a class="nav-link" aria-current="page">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/menu"> <a class="nav-link" aria-current="page">Menu</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/offers"> <a class="nav-link" aria-current="page">Offers</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/cart"> <a class="nav-link" aria-current="page">cart ({cardItems.length})</a></Link>
                        </li>
                    </ul>

                    <button className="btn btn-success" onClick={() => {
                        btnName == "login" ? updadtedBtnName("logout") : updadtedBtnName("login")
                    }} value={"login"}>{btnName}</button>

                </div>
            </div>
        </nav >

    );
}

export default HeaderComponet;