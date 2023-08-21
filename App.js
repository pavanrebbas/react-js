import React from "react";
import ReactDOM from "react-dom/client";


/* 
  HEADER COMPONENT
    - logo
    - menu items
    - search bar
    - offers
  --------------------------------------------
  BODY COMOPONENT
      -Best Offers
      -what's on user mind
      - Top restauents
      - restarante with online food delivery
 --------------------------------------------
  FOOTER COMPONENT
      - LOGO
      - LINKS
      - FEEDBACKS
      - CONATCT US 
      -footer
  --------------------------------------------
 */


////// Headercomponent
const HeaderComponet = () => {
  return (
    <header className="sticky-top Header-componet">
      <nav className="container navbar navbar-expand-sm ">
        <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" width="8%" />
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
};


///// Best Offers
const BestOffers = (props) => {
  return (
    <img src={props.restImg} alt="" width={"100%"} />
  )
};

//// What's on user mind
const userName = {
  name: 'Pavan'
};
const UserLookFor = (props) => {
  return (
    <div className="UserLookFor">
      <img src={props.FooditemImg} alt="" width={"80%"} />
    </div>
  );

};


////// TopRestarentcomponent
const TopRestarentscomponent = (props) => {
  console.log(props);
  return (
    <div className="TopRestoComponents">
      <img src={props.restImg} alt="" className="restoimages" width={"100%"} />
      <h5 className="mt-2 fw-bold">{props.restoName}</h5>
      <h6><i className="bi bi-star-fill"></i> {props.restoRating}</h6>
      <p>{props.restoLocation}</p>
    </div>
  )

};


///restarante with online food delivery
const RestarentWithOnlineFood = (props) => {
  console.log(props)
  return (
    <div className="RestarentWithOnlineFood">
      <img src={props.restImg} alt="" className="restoimages" width={"100%"} />
      <h5 className="fw-bold mt-2">{props.restoName}</h5>
      <h6><i className="bi bi-star-fill"></i> {props.restoRating}</h6>
      <p>{props.restoLocation}</p>
    </div>
  );
};



//////////////////Bodycomponent///////////////////////////
const Bodycomponent = () => {

  return (
    <div className="body">

      {/************** BEST-OFFERS ***************/}
      <div className="container">
        <h4 className="pt-5 fw-bold ">Best Offers for you</h4>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6 py-2">
            <BestOffers
              restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/192aa65bc102da7d40208a6e7da1800c" />
          </div>

          <div className="col-lg-4 col-md-4 col-6 py-2">
            <BestOffers
              restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/21e0a04c73c8b39b5616799e219ce032" />
          </div>

          <div className="col-lg-4 col-md-4 col-6 py-2">
            <BestOffers
              restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/rng/md/carousel/production/9ea1cecc15fa19367d1c7afe57fefb92" />
          </div>
        </div>
      </div>

      {/****************** UserLooksFor ******************/}
      <div className="container mt-5">
        <h4 className="fw-bold">{userName.name}, what's on your mind?</h4>
        <div className="row py-4">
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1675667625/PC_Creative%20refresh/Biryani_2.png" />
          </div>
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" />
          </div>
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" />
          </div>
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" />
          </div>
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" />
          </div>
          <div className="col-lg-2 col-md-2 col-3">
            <UserLookFor
              FooditemImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png" />
          </div>
        </div>
        <hr />
      </div>


      {/*********TOP RESTARENTS IN HYDERABAD*********/}
      <div className="container  mt-5 ">
        <h4 className=" fw-bold">Top restaurants  in Hyderabad</h4>
        <div className="row py-4">
          <div className="col-lg-3 col-md-3 col-6">
            <TopRestarentscomponent
              restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/ks4d93rjtcbitkzkbqx0"
              restoName="Shah Ghouse"
              restoRating="5"
              restoLocation="Medhipatnam" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <TopRestarentscomponent
              restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/56c9ab92bd79745fd152a30fa2525426"
              restoName="KFC"
              restoRating="4.2"
              restoLocation="madhapur" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <TopRestarentscomponent restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/ee5f8e06b300efc07c9fe3f4df40dfc4"
              restoName="McDonald's "
              restoRating="4.5"
              restoLocation="Narayanaguda" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <TopRestarentscomponent restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/1ace5fa65eff3e1223feb696c956b38b"
              restoName="Subway"
              restoRating="3.7"
              restoLocation="Medhipatnam" />
          </div>
        </div>
        <hr />
      </div>


      {/********* RESTARENT WITH ONLINE FOOD DEVIVERY *********/}
      <div className="container py-3 online-food-component">
        <h4 className=" fw-bold">Restaurants with online food delivery in Hyderabad</h4>
        <div className="row py-4">
          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/wkvh8xtryde5dj2nrme5"
              restoName="Mehfill"
              restoRating="4.5 "
              restoLocation="T.Nagar" />
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/ee5f8e06b300efc07c9fe3f4df40dfc4"
              restoName="McDonald's"
              restoRating="4.5 "
              restoLocation="Hitech-city" />
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/qo2pnxwhpcs6xxnvd1kc"
              restoName="Terobrama"
              restoRating="4.2 "
              restoLocation="Ashok Nagar" />
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/56c9ab92bd79745fd152a30fa2525426"
              restoName="KFC"
              restoRating="4.1 "
              restoLocation="Himayath Nagar" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/ks4d93rjtcbitkzkbqx0"
              restoName="shah Ghouse"
              restoRating="4.3 "
              restoLocation="Himayath Nagar" />
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/nk18d286nnm0lejgowsp"
              restoName="California Burrito"
              restoRating="4.5 "
              restoLocation="Jublii Hills" />
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/d20fdc8c86aa8bd0638f47dd013d46f9"
              restoName="La Pino'z Pizza"
              restoRating="4.2 "
              restoLocation="Banjara Hills" />
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <RestarentWithOnlineFood restImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/c058b951bd917bf716630dff74648a5d"
              restoName="Haldhiram's Restaurant"
              restoRating="4.2 "
              restoLocation="Banjara Hills" />
          </div>
        </div>
      </div>
    </div>
  )

};


//////Footer component
const Footercomponent = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-4 col-4">
            <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" className="rounded-5" width={"50%"} />
            <p>© 2023  restauent
              Pvt. Ltd was</p>
          </div>

          <div className="col-lg-3 col-md-4 col-4">
            <h5>Company</h5>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Restaurant One</a></li>
              <li><a href="">Restaurant Instamart</a></li>
              <li><a href="">Restaurant Genie</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-4">
            <h5>Contact us</h5>
            <ul>
              <li><a href="">Help & support</a></li>
              <li><a href="">Partner with us</a></li>
              <li><a href="">Ride with us</a></li>
              <li><a href="">About</a></li>
              <li><a href="">About</a></li>
              <li><a href="">About</a></li>
            </ul>

            <ul>
              <h5>Legal</h5>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Cookie Policy</a></li>
              <li><a href="">Privacy policy</a></li>
              <li><a href="">About</a></li>
              <li><a href="">About</a></li>
              <li><a href="">About</a></li>
            </ul>
          </div>

          <div className="col-lg-3  col-md-4 col-4">
            <h5>We deliver to</h5>
            <ul>
              <li><a href="">Hyderabad</a></li>
              <li><a href="">Bangalore</a></li>
              <li><a href="">Karnataka</a></li>
              <li><a href="">Mumbai</a></li>
              <li><a href="">Punjab</a></li>
              <li><a href="">Delhi</a></li>
              <li><a href="">Pune</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



//// TOTALCOMPONENTS::::
const AllresaturentComponents = () => {

  return (
    <div>
      <HeaderComponet></HeaderComponet>
      <Bodycomponent></Bodycomponent>
      <Footercomponent></Footercomponent>
    </div>
  )


}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AllresaturentComponents />); // React Js element to HTML Element

