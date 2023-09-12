import { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "./shimmer.js";
import { useParams } from "react-router-dom";
import { restoMenu_URL } from "../utilities/constantURL.js";
import { menu_imgURL } from "../utilities/constantURL.js";




const RestoMenu = () => {

    const [restoMenu, setRestoMenu] = useState(null);

    //////////PARAMS TO USE THE RESTOID DYNAMICALLY IN THE URL//////////////////
    const { restoid } = useParams()
    console.log(restoid)


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

    const { name, areaName, avgRating, cuisines } = restoMenu.data.cards[0].card.card.info;
    const { itemCards } = restoMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.itemAttribute.vegClassifier

    return (


        <div className="container my-5 ">
            <h5 className="fw-bold" >{name}</h5>
            <small>{cuisines.join(" , ")}</small> <br/>
            <small>{areaName}</small>
            <p><i className="bi bi-star-fill"></i> {avgRating}</p>
            <hr/>


            <div className="row ">
                <h5 className="fw-bold">Recommended ({itemCards.length})</h5>
                <div className="col-2 py-3">
                    <button className="btn btn-success" onClick={() => {

                        let vegItems = itemCards.filter((veg) => (veg.card.info.itemAttribute.vegClassifier = "VEG"))
                        setRestoMenu(vegItems)
                    }}
                    >veg only
                    </button>

                </div>

                {
                    itemCards.map((menuItem) =>
                        <div className="" >
                            {menuItem.card.info.name} - { menuItem.card.info.price}
                            <hr />
                        </div>
                    )}

            </div>
        </div >
    )
};

export default RestoMenu;