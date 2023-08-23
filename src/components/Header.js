import { logo_Img } from "../utilities/constantURL";

const HeaderComponet = () => {
    return (
        <header className="sticky-top Header-componet">
            <nav className="container navbar navbar-expand-sm ">
                <img src={logo_Img} width="8%" />
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse " id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto  mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">offers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                    <form className="d-flex  my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="search-Button my-2 my-sm-0" type="submitz">submit</button>
                    </form>
                </div>
            </nav>

        </header>
    );
}

export default HeaderComponet;