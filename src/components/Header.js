import { useState } from "react";
import { logo_Img } from "../utilities/constantURL";
import { Link } from "react-router-dom";

const HeaderComponet = () => {


    const [btnName, updadtedBtnName] = useState("login")

    return (
        <header className="sticky-top Header-componet">
            <nav className="container navbar navbar-expand-sm ">
                <img src={logo_Img} width="8%" />
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse " id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto  mt-2 mt-lg-0">
                        <li className="nav-item">
                           <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/menu" className="nav-link">Menu</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/offers" className="nav-link">offers</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex  my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="search-Button my-2 my-sm-0" type="submitz">submit</button>
                    </form> */}
                    <button className="btn btn-success" value="login" onClick={() => {

                        //SHORTCUT METHOD  (IF ELSE) AND ASLO IT IS A (TERNARY OPERATOR)
                        btnName == "login" ? updadtedBtnName("logout") : updadtedBtnName("login")

                    }}
                    >{btnName}</button>
                </div>
            </nav>

        </header>
    );
}

export default HeaderComponet;