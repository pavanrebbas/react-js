import { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "./shimmer.js";
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

        }
    };


    ///////////////CONDITIONAL RENDERING//////////////////////////
    if (restoMenu === null) {

        return (
            <Shimmer></Shimmer>
        )
    };



    const { name, areaName, avgRating, cuisines, totalRatingsString, costForTwoMessage, } = restoMenu.data.cards[0].card.card.info;
    // const { itemCards } = restoMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.itemAttribute.vegClassifier
    // "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    const Caterogys = restoMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => (c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    )

    const { descriptionList } = restoMenu.data.cards[0].card.card.info.aggregatedDiscountInfo

    return (


        <div className="container my-5 ">
            <div className="row offset-lg-2 offset-1">
                <div className="col">
                    <h5 className="fw-bold" >{name}</h5>
                    <small>{cuisines.join(" , ")}</small> <br />
                    <small>{areaName}</small>
                </div>

                <div className="col">
                    <p className="border border-1  w-25 py-1 text-center fw-bold" style={{ boxShadow: "0px 0px 5px 0px gray" }} > <i className="bi bi-star-fill" ></i> {avgRating}<hr /> <small>{totalRatingsString}</small> </p>
                </div>
                <hr className="my-3" />

                <div className="col d-flex">
                    <p className="fw-bold">{costForTwoMessage}</p>
                </div>
            </div>

            <div className="row offset-lg-2 offset-1">
                <div className="col">
                    {
                        descriptionList.map((offer) =>

                            <p>{offer.meta}</p>
                        )
                    }
                </div>
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