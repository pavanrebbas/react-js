import { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "./shimmer.js";





const RestoMenu = () => {



    const [restoMenu, setRestoMenu] = useState(null);


    useEffect(() => {

        getRestoMenuData();

    }, []);

    const getRestoMenuData = async () => {

        try {
            const resto = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4069559&lng=78.4610819&restaurantId=24622&catalog_qa=undefined&submitAction=ENTER")
            console.log(resto.data)
            setRestoMenu(resto.data)
        } catch {

        }
    };


    //CONDITIONAL RENDERING
    if (restoMenu === null) {

        return (
            <Shimmer></Shimmer>
        )
    }

    const { name, areaName, avgRating } = restoMenu.data.cards[0].card.card.info;
    const{itemCards} = restoMenu.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return (

        <div className="container py-4">
            <h1>{name}</h1>
            <h4>{areaName}</h4>
            <p>{avgRating}</p>

            <ul className="list-group">
                <li className="list-group-item">{itemCards}</li>
            </ul>
        </div>
    )
};

export default RestoMenu;