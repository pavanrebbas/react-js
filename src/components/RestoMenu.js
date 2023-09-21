import { useEffect, useState } from "react";
import axios from "axios";
import MenuShimmer from "./RestoMenuShimmer.js";
import { useParams } from "react-router-dom";
import { restoMenu_URL } from "../utilities/constantURL.js";
import RestarentCategory from "./RestaurentCategory.js";


const RestoMenu = () => {

    const [restoMenu, setRestoMenu] = useState(null);

    //////////PARAMS TO USE THE RESTOID DYNAMICALLY IN THE URL//////////////////
    const { restoid } = useParams()
    // console.log(restoid)


    useEffect(() => {
        getRestoMenuData();
    }, []);




    const getRestoMenuData = async () => {

        try {
            const resto = await axios.get(restoMenu_URL + restoid)
            console.log(resto.data)
            setRestoMenu(resto.data)
        } catch {
            //API ERROR
        }
    };


    ///////////////CONDITIONAL RENDERING//////////////////////////
    if (restoMenu === null) {

        return (
            <MenuShimmer></MenuShimmer>
        )
    };



    const { name, areaName, avgRating, cuisines, totalRatingsString, costForTwoMessage, } = restoMenu.data.cards[0].card.card.info;
    // const { itemCards } = restoMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.itemAttribute.vegClassifier
    // "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    const Caterogys = restoMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => (c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    )

    /**** OFFERS FLAT 20% LIKE THAT ****/
    const offers = restoMenu.data.cards[1].card.card.gridElements.infoWithStyle.offers
    // console.log(Offers)


    /******** DELIVARY TIME ********/
    const { slaString, lastMileTravelString } = restoMenu.data.cards[0].card.card.info.sla


    return (

        <div className="container my-5 ">
            <div className="row ">
                <div className="col-lg-4 col-md-5 offset-lg-3 offset-md-2 col-6 ">
                    <h5 className="fw-bold" >{name}</h5>
                    <small>{cuisines.join(" , ")}</small> <br />
                    <small>{areaName}, </small>
                    <small>{lastMileTravelString}</small>

                </div>

                <div className="col-lg-4 col-md-5 col-6">
                    <p className="border border-1 w-25   py-1 text-center fw-bold" style={{ boxShadow: "0px 0px 5px 0px gray" }} > <i className="bi bi-star-fill" ></i> {avgRating}<hr /> <small>{totalRatingsString}</small> </p>
                </div>
                <hr className="col-lg-6 col-12 offset-lg-3" />

                <div className="col-lg-6 offset-md-2 offset-lg-3 d-flex gap-5">
                    <p className="fw-bold"><i class="bi bi-clock-fill"></i> {slaString} </p>
                    <p className="fw-bold"><i class="fa-solid fa-indian-rupee-sign"></i> {costForTwoMessage} </p>
                </div>
            </div>

            {/****************** OFFERS LIST ******************/}
            <div className="row text-center my-3  gap-2 offset-lg-2 ">
                {
                    offers.map((offer) =>
                        <>
                            <div className=" col py-1 border border-1 rounded-3">
                                <span className="fw-bold">{offer.info.header}</span> <br></br>
                                <small> {offer.info.couponCode} </small> |
                                <small> {offer.info.description} </small>
                            </div>
                        </>
                    )
                }
            </div>


            {/* ALL MENU LIST */}
            {
                Caterogys.map((caterory) => (

                    <RestarentCategory data={caterory.card.card} />
                ))
            }

        </div >
    )
};

export default RestoMenu;
