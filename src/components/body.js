/* 
 Importing Components
 ---------------------------------------------
     -Best Offers
     -What's on user mind
     -TopRestarentcomponent
     -restarante with online food delivery
-----------------------------------------------
     -----JSON-DATA---------
          ----Toprestarent Data----------
          ----Whats on you mind Data----------
*/

import BestOffers from "../components/BestOffres.js"
import UserLooksFor from "./whatsMind.js";
import { userName } from "../utilities/mockData.js";
import TopRestarentscomponent from "./TopRestaurant.js";
import RestarentWithOnlineFood from "./Onlinedeliveryresto.js";
import { FoodData } from "../utilities/mockData.js";
import { bestOffersData } from "../utilities/mockData.js";
import { ToprestarantData } from "../utilities/mockData.js";
import { onlineFoodDelivery } from "../utilities/mockData.js"







const Bodycomponent = () => {
    return (
        <div className="body">

            {/************** BEST-OFFERS ***************/}
            <h4 className="pt-5 fw-bold mx-5 px-5 py-2">Best Offers for you</h4>
            <div className="BestOffers-container">

                {
                    bestOffersData.map((besoffer) => <BestOffers bestoff={besoffer} />)
                }

                {/* <div className="row">
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
                </div> */}
            </div>

            {/****************** What's On Your Mind ******************/}
            <h4 className="fw-bold mx-5 px-5  mt-5">{userName.name}, what's on your mind?</h4>
            <div className="WhatsFood-container my-2">
                {
                    FoodData.map((fooditem) => (<UserLooksFor food={fooditem} />))
                }
            </div>
            <hr />


            {/*********TOP RESTARENTS IN HYDERABAD*********/}
            <h4 className=" fw-bold mx-5 px-5 py-4">
                Top restaurants  in Hyderabad</h4>
            <div className="topresto-container">
                {
                    ToprestarantData.map((restarent) => (<TopRestarentscomponent restoData={restarent} />))
                }
            </div>
            <hr />


            {/********* RESTARENT WITH ONLINE FOOD DEVIVERY *********/}
            <h4 className=" fw-bold mx-5 px-5 mt-5">Restaurants with online food delivery in Hyderabad</h4>
            <div className="onlineRestoDevivery-container py-3 online-food-component">
                {
                    onlineFoodDelivery.map(onlineResto => <RestarentWithOnlineFood onlineRestoDelivery={onlineResto} />)
                }

                {/* <div className="col-lg-3 col-md-3 col-6">
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
                    </div> */}

            </div>
            <hr />
        </div >
    )

}

export default Bodycomponent;