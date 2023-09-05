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
import UserLooksFor from "../components/whatsMind.js";
import { userName } from "../utilities/mockData.js";
import TopRestarentscomponent from "../components/TopRestaurant.js"
import RestarentWithOnlineFood from "../components/Onlinedeliveryresto.js";
import { FoodData } from "../utilities/mockData.js";
import { bestOffersData } from "../utilities/mockData.js";
import { ToprestarantData } from "../utilities/mockData.js";
import { onlineFoodDelivery } from "../utilities/mockData.js";
import { useEffect, useState } from "react";



const Bodycomponent = () => {

    let [ToprestarantData, filterrestarent] = useState(

        [
            {
                id: "344287",
                name: "Kwality Walls",
                cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                locality: "Near Apollo Hospital",
                areaName: "Jubilee Hills",
                costForTwo: "₹150 for two",
                cuisines: ["Biryani", "Tandoor"],
                avgRating: 3.9,
                cost: 110,
            },

            {
                id: "344284",
                name: "KFC",
                cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                locality: "Medhipatnam",
                areaName: "Jubilee Hills",
                costForTwo: "₹120 for two",
                cuisines: [
                    "South Indian"
                ],
                avgRating: 4.1,
                cost: 60,
            },

            {
                id: "354284",
                name: "Mc Donald's",
                cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                locality: "Narayanaguda",
                areaName: "near RS brotheres",
                costForTwo: "₹120 for one",
                cuisines: [
                    "South Indian"
                ],
                avgRating: 4.2,
                cost: 110,
            },

            {
                id: "354d288",
                name: "Therobroma",
                cloudinaryImageId: "qo2pnxwhpcs6xxnvd1kc",
                locality: "Rethibowli",
                areaName: "near RS brotheres",
                costForTwo: "₹120 for one",
                cuisines: [
                    "South Indian"
                ],
                avgRating: 4.5,
                cost: 300,
            },
        ]
    )

    return (
        <div className="body">

            {/************** BEST-OFFERS ***************/}
            <h4 className="pt-5 fw-bold mx-5 px-5 py-2">Best Offers for you</h4>
            <div className="BestOffers-container">

                {
                    bestOffersData.map((besoffer) => <BestOffers bestoff={besoffer} />)
                }
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
            <div className="filterresto container py-2">

                <button className="btn btn-primary" onClick={() => {

                    let filterresto = ToprestarantData.filter((resto) => { resto.avgRating > 4 })

                    filterrestarent(filterresto)

                }}>
                    4+ ating</button>

            </div>
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
                    </div> */
                }
            </div>
        </div >
    );

};

export default Bodycomponent;