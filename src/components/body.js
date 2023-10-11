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
import TopRestarentscomponent, { oneFreeDelivery } from "../components/TopRestaurant.js"
import RestarentWithOnlineFood from "../components/Onlinedeliveryresto.js";
// import { FoodData } from "../utilities/mockData.js";
import { bestOffersData } from "../utilities/mockData.js";
// import { ToprestarantData } from "../utilities/mockData.js";
// import { onlineFoodDelivery } from "../utilities/mockData.js";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./mainShimmer.js";
import { Link } from "react-router-dom";
// import axios from "axios";
import UserDetails from "../utilities/userDetails.js";



const Bodycomponent = () => {

    // TOP-RESTAURENT-DATA
    let [ToprestarantData, filterrestaurent] = useState([]);

    // ALL RESTAURENT-DATA FILTER
    let [AllRestaurant, setAllrestaurant] = useState(ToprestarantData)

    // WHATS ON YOUR MIND-DATA
    let [whatsOnData, setWhatsOnData] = useState([]);

    //Restaurants with online food delivery in Hyderabad
    let [onlineDeliveryRestaureant, setonlineDeliveryRestaureant] = useState([])

    // CLICK FUNCTIONS FILTER BUTTONS USESATE
    let [avgRate, setAvgRate] = useState([]);

    let [costForTwo, setCostForTwo] = useState([]);

    // let [nearTwokmResto, setnearTwokmResto] = useState([]);


    // TOP RESTAURANT  SEARCH COMPONENTS
    let [search, setSearch] = useState([]);

    // WHATS ON YOUR MIND SEARCH COMPONENTS
    let [whatsFood, setWhatsFood] = useState([])


    // USER NAME FOR WHAT'S ON YOUR MIND WITH THE USE OF (USECONTEXT)
    const userName = useContext(UserDetails)


    //HIGHER ORDER FUNCTION TO (oneFreeDelivery)
    const Delivery = oneFreeDelivery(TopRestarentscomponent) // THIS LINE IS TREATED LIKE A COMPONENT LIKE (<Delivery/> COMPONENT)
    // console.log(Delivery )



    useEffect(() => {
        //TOP-RESTO-FETCH-DATA BY USING JAVASCRIPT FETCH METHOD LIKE (CALLBACK-METHOD)
        topRestofetchData();

        //WHATS-ON-YOUR-MIND-FETCH-DATA BY USING JAVASCRIPT FETCH METHOD LIKE (CALLBACK-METHOD)
        whatsonData();

        // Restaurants with online food delivery in Hyderabad
        restaurantWithOnlineDelivery();
    }, []);





    //////TOP-RESTO-FECTH-DATA///////////
    const topRestofetchData = async () => {
        const restData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.41113717402138&lng=78.4521259367466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const orginalData = await restData.json();
        // console.log(orginalData)
        // const apidta = orginalData.name
        // filterrestaurent(apidta)

        //////// TOP RESTAURENT JSON RAW DATA LIKE API///////
        const topRestoApiList = [
            {
                info: {
                    id: "738039",
                    name: "James bond Food court",
                    cloudinaryImageId: "9cf5be9a1d50bc7543796d5d7bcd6f9a",
                    locality: "Balkampet Rd",
                    areaName: "Ameerpet",
                    oneFreeDelivery: true,
                    costForTwo: "₹200 for two",
                    cuisines: [
                        "Chinese",
                        "Biryani"
                    ],
                    avgRating: 4,
                    feeDetails: {
                        restaurantId: "738039",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3700
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3700
                    },
                    parentId: "438290",
                    avgRatingString: "4.0",
                    totalRatingsString: "50+",
                    promoted: true,
                    adTrackingId: "cid=8247187~p=1~eid=0000018a-6a54-7027-74f9-1ae600ef0159~srvts=1694001033255~63141",
                    sla: {
                        deliveryTime: 55,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "55 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-07 00:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "50% OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "50% off up to ₹100 | Use code TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    isNewlyOnboarded: true,
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "james-bond-food-court-balkampet-rd-ameerpet-hyderabad-738039",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "24622",
                    name: "Domino's Pizza",
                    cloudinaryImageId: "gronja3yeannuvwwjwua",
                    locality: "Masab Tank",
                    areaName: "Banjara Hills",
                    oneFreeDelivery: true,
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                    ],
                    avgRating: 3.9,
                    feeDetails: {
                        restaurantId: "24622",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "2456",
                    avgRatingString: "3.9",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 25,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "₹150 OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use FLAT150",
                                discountType: "Flat",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "Flat ₹150 off on orders above ₹999 | Use code FLAT150",
                                discountType: "Flat",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/dominos-pizza-masab-tank-banjara-hills-hyderabad-24622",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "376914",
                    name: "Theobroma",
                    cloudinaryImageId: "j56oxlpkhbhofqshycov",
                    locality: "Central Zone",
                    areaName: "Somajiguda & Khairtabad",
                    oneFreeDelivery: false,
                    costForTwo: "₹500 for two",
                    cuisines: [
                        "Desserts"
                    ],
                    avgRating: 4.5,
                    feeDetails: {
                        restaurantId: "376914",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 4000
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 4000
                    },
                    parentId: "1040",
                    avgRatingString: "4.5",
                    totalRatingsString: "1K+",
                    promoted: true,
                    adTrackingId: "cid=8052606~p=2~eid=0000018a-6a54-7027-74f9-1ae700ef0223~srvts=1694001033255~63141",
                    sla: {
                        deliveryTime: 38,
                        lastMileTravel: 2.4,
                        serviceability: "SERVICEABLE",
                        slaString: "38 mins",
                        lastMileTravelString: "2.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-07 00:00:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "newg.png",
                                description: "Gourmet"
                            }
                        ]
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "Gourmet",
                                            imageId: "newg.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "353591",
                    name: "Mandi @36",
                    cloudinaryImageId: "fc5rarfywwliy6rkd5sb",
                    locality: "Opposite City Center Mall",
                    areaName: "Banjara Hills",
                    oneFreeDelivery: true,
                    costForTwo: "₹1000 for two",
                    cuisines: [
                        "Arabian"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "353591",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 4000
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 4000
                    },
                    parentId: "13223",
                    avgRatingString: "4.1",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 49,
                        lastMileTravel: 0.9,
                        serviceability: "SERVICEABLE",
                        slaString: "49 mins",
                        lastMileTravelString: "0.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:00:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "newg.png",
                                description: "Gourmet"
                            }
                        ]
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "20% OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "20% off up to ₹50 | Use code TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "Gourmet",
                                            imageId: "newg.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/mandi-36-opposite-city-center-mall-banjara-hills-hyderabad-353591",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "10882",
                    name: "Madhur Sweets",
                    cloudinaryImageId: "y8iljdwvxte9e7rarib7",
                    locality: "Humayun Nagar",
                    areaName: "Masab Tank",
                    oneFreeDelivery: false,
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Sweets",
                        "Desserts",
                        "Snacks"
                    ],
                    avgRating: 4.5,
                    veg: true,
                    feeDetails: {
                        restaurantId: "10882",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 5100
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 5100
                    },
                    parentId: "1538",
                    avgRatingString: "4.5",
                    totalRatingsString: "10K+",
                    promoted: true,
                    adTrackingId: "cid=8167749~p=3~eid=0000018a-6a54-7027-74f9-1ae800ef0300~srvts=1694001033255~63141",
                    sla: {
                        deliveryTime: 51,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "51 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:30:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "10% OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "10% off up to ₹40 | Use code TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/madhur-sweets-humayun-nagar-masab-tank-hyderabad-10882",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "1590",
                    name: "Sarvi Restaurant",
                    cloudinaryImageId: "ix0mifgcpywoaeptbjh3",
                    locality: "Road 11",
                    areaName: "Banjara Hills",
                    oneFreeDelivery: true,
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Tandoor",
                        "Desserts"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "1590",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "4623",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 46,
                        lastMileTravel: 1,
                        serviceability: "SERVICEABLE",
                        slaString: "46 mins",
                        lastMileTravelString: "1.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-07 00:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/sarvi-restaurant-road-11-banjara-hills-hyderabad-1590",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "734888",
                    name: "Chaayos Chai+Snacks=Relax",
                    cloudinaryImageId: "bdebfd404d1b15acf064275279aafb7d",
                    locality: "Khairatabad Circle No.17",
                    areaName: "BANJARA HILLS",
                    oneFreeDelivery: true,
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                    ],
                    avgRating: 4.4,
                    feeDetails: {
                        restaurantId: "734888",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3700
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3700
                    },
                    parentId: "281782",
                    avgRatingString: "4.4",
                    totalRatingsString: "20+",
                    promoted: true,
                    adTrackingId: "cid=8038942~p=4~eid=0000018a-6a54-7027-74f9-1ae900ef045b~srvts=1694001033255~63141",
                    sla: {
                        deliveryTime: 61,
                        lastMileTravel: 4.5,
                        serviceability: "SERVICEABLE",
                        slaString: "61 mins",
                        lastMileTravelString: "4.5 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "₹100 OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use FLAT100",
                                discountType: "Flat",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "Flat ₹100 off on orders above ₹399 | Use code FLAT100",
                                discountType: "Flat",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    isNewlyOnboarded: true,
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-khairatabad-circle-no-17-banjara-hills-hyderabad-734888",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "651179",
                    name: "Soul Rasa",
                    cloudinaryImageId: "d4e6d04548a11e49b2c1f7efe9806fb9",
                    locality: "Sheikpet village",
                    areaName: "Banjara Hills",
                    costForTwo: "₹300 for two",
                    oneFreeDelivery: false,
                    cuisines: [
                        "Indian",
                        "Healthy Food",
                        "Home Food",
                        "North Indian",
                        "South Indian"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "651179",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "239281",
                    avgRatingString: "4.1",
                    totalRatingsString: "500+",
                    sla: {
                        deliveryTime: 53,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "53 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:30:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "brand",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "60% OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use GUILTFREE",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "60% off up to ₹120 | Use code GUILTFREE",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "brand"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/soul-rasa-sheikpet-village-banjara-hills-hyderabad-651179",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            },
            {
                info: {
                    id: "136273",
                    name: "Ghrelin - Cafe and Patisserie",
                    cloudinaryImageId: "xtdg2woge2yehuy4ixoo",
                    locality: "Road 9",
                    areaName: "Banjara Hills",
                    oneFreeDelivery: true,
                    costForTwo: "₹450 for two",
                    cuisines: [
                        "Bakery",
                        "Desserts",
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "British"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "136273",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "8166",
                    avgRatingString: "4.3",
                    totalRatingsString: "5K+",
                    promoted: true,
                    adTrackingId: "cid=8127449~p=5~eid=0000018a-6a54-7027-74f9-1aea00ef0537~srvts=1694001033255~63141",
                    sla: {
                        deliveryTime: 50,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "50 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-06 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {
                        header: "30% OFF",
                        shortDescriptionList: [
                            {
                                meta: "Use TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ],
                        descriptionList: [
                            {
                                meta: "30% off up to ₹75 | Use code TRYNEW",
                                discountType: "Percentage",
                                operationType: "RESTAURANT"
                            }
                        ]
                    },
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-07cbce64-957e-49e3-bd59-d63b9a1a1c9e"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/ghrelin-cafe-and-patisserie-road-9-banjara-hills-hyderabad-136273",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_byName"
            }
        ];
        filterrestaurent(topRestoApiList);
        setAvgRate(topRestoApiList);
        setCostForTwo(topRestoApiList);
        setAllrestaurant(topRestoApiList)
    };


    //////WHATS-ON-YOUR-MIND-FECTH-DATA///////////
    const whatsonData = () => {
        /* WHATS ON YOUR MIND DATA */
        const whatsOnMindApiList = [
            {
                id: "750592",
                imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                action: {
                    link: "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
                frequencyCapping: {}
            },
            {
                id: "750580",
                imageId: "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                action: {
                    link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                    text: "pizzas",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for pizza",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                frequencyCapping: {}
            },
            {
                id: "762797",
                imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                action: {
                    link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                    text: "Burgers",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for burger",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                frequencyCapping: {}
            },
            {
                id: "750588",
                imageId: "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                action: {
                    link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                    text: "Chinese",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for chinese",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                frequencyCapping: {}
            },
            {
                id: "750597",
                imageId: "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                action: {
                    link: "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                    text: "Ice Cream",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for icecream",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                frequencyCapping: {}
            },
            {
                id: "750132",
                imageId: "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                action: {
                    link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                frequencyCapping: {}
            },
            {
                id: "750249",
                imageId: "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                action: {
                    link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                    text: "Shawarma",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for shawarma",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                frequencyCapping: {}
            },
            {
                id: "750582",
                imageId: "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                action: {
                    link: "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                    text: "North Indian",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for north indian",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
                frequencyCapping: {}
            },
            {
                id: "750644",
                imageId: "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                action: {
                    link: "https://www.swiggy.com/collections/80441?collection_id=80441&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli",
                frequencyCapping: {}
            },
            {
                id: "750584",
                imageId: "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                action: {
                    link: "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                    text: "South Indian",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for south indian",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                frequencyCapping: {}
            },
            {
                id: "749774",
                imageId: "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                action: {
                    link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    text: "Noodles",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for noodles",
                    altTextCta: "open"
                },
                entityId: "80464",
                frequencyCapping: {}
            },
            {
                id: "750203",
                imageId: "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                action: {
                    link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open"
                },
                entityId: "80476",
                frequencyCapping: {}
            },
            {
                id: "750636",
                imageId: "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                action: {
                    link: "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                    text: "Kebabs",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for kebabs",
                    altTextCta: "open"
                },
                entityId: "80452",
                frequencyCapping: {}
            },
            {
                id: "750223",
                imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                action: {
                    link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    text: "Rolls",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for roll",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                frequencyCapping: {}
            },
            {
                id: "749874",
                imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                action: {
                    link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for cakes",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                frequencyCapping: {}
            },
            {
                id: "750572",
                imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                action: {
                    link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                    text: "Pure Veg",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurants curated for veg",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                frequencyCapping: {}
            },
            {
                id: "750111",
                imageId: "v1675667630/PC_Creative%20refresh/Desserts_2.png",
                action: {
                    link: "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Desserts&type=rcv2",
                    text: "Dessert",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for dessert",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Desserts",
                frequencyCapping: {}
            },
            {
                id: "750217",
                imageId: "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                action: {
                    link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                    text: "Pav Bhaji",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for pav bhaji",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                frequencyCapping: {}
            },
            {
                id: "750209",
                imageId: "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                action: {
                    link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                    text: "Pastry",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for Pastry",
                    altTextCta: "open"
                },
                entityId: "80358",
                frequencyCapping: {}
            },
            {
                id: "750226",
                imageId: "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                action: {
                    link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK"
                },
                entityType: "BANNER",
                accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open"
                },
                entityId: "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                frequencyCapping: {}
            },

        ];
        setWhatsOnData(whatsOnMindApiList)

    };


    //Restaurants with online food delivery in Hyderabad/////////

    const restaurantWithOnlineDelivery = () => {

        const onlineDeliveryRestaurantData = [
            {
                info: {
                    id: "61315",
                    name: "Chai Point",
                    cloudinaryImageId: "roxr7wsrrrwy80binchi",
                    locality: "GVK Mall",
                    areaName: "Banjara Hills",
                    costForTwo: "₹150 for two",
                    cuisines: [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "61315",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "1607",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 22:00:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/chai-point-gvk-mall-banjara-hills-hyderabad-61315",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "367769",
                    name: "Lucky Restaurant",
                    cloudinaryImageId: "qems028i3da5rxf81rbp",
                    locality: "Banjara Hills",
                    areaName: "MasabTank",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Biryani",
                        "North Indian",
                        "Tandoor"
                    ],
                    avgRating: 4,
                    favourite: true,
                    feeDetails: {
                        restaurantId: "367769",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "293683",
                    avgRatingString: "4.0",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 22,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-23 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/lucky-restaurant-banjara-hills-masabtank-hyderabad-367769",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "1546",
                    name: "Subway",
                    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
                    locality: "GVK Mall",
                    areaName: "Banjara Hills",
                    costForTwo: "₹350 for two",
                    cuisines: [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "1546",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "2",
                    avgRatingString: "4.3",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 28,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 22:50:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/subway-gvk-mall-banjara-hills-hyderabad-1546",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "28108",
                    name: "Al Rabea Al Arabi Cafeteria",
                    cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
                    locality: "Pillar no 37",
                    areaName: "Mehdipatnam",
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Arabian",
                        "Lebanese"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "28108",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3700
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3700
                    },
                    parentId: "7582",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 27,
                        lastMileTravel: 4.3,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "4.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-23 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-pillar-no-37-mehdipatnam-hyderabad-28108",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "142670",
                    name: "Shah Ghouse Cafe & Restaurant",
                    cloudinaryImageId: "bk26jkkqpg55veii0aj9",
                    locality: "Santh Nirankari Satsang Bhavan",
                    areaName: "Lakdikapul",
                    costForTwo: "₹350 for two",
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "Mughlai",
                        "North Indian"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "142670",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3100
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3100
                    },
                    parentId: "18992",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 24,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹75 OFF",
                        subHeader: "ABOVE ₹299",
                        discountTag: "FLAT DEAL"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/shah-ghouse-cafe-and-restaurant-santh-nirankari-satsang-bhavan-lakdikapul-hyderabad-142670",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "80479",
                    name: "The Bowl Company",
                    cloudinaryImageId: "bb6049fae59b8a2413a9177eb0338b49",
                    locality: "Road No.12",
                    areaName: "Banjara Hills",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Pan-Asian",
                        "Continental",
                        "North Indian",
                        "Desserts",
                        "American",
                        "Asian",
                        "Beverages",
                        "Biryani",
                        "Chinese",
                        "European",
                        "Grill",
                        "Hyderabadi",
                        "Indian",
                        "Italian",
                        "Kebabs",
                        "Lucknowi",
                        "Mediterranean",
                        "Mexican",
                        "Mughlai",
                        "Oriental",
                        "Pastas",
                        "Punjabi",
                        "Raja"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "80479",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "4317",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:30:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                description: "OnlyOnSwiggy"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "OnlyOnSwiggy",
                                            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹139"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/the-bowl-company-road-no-12-banjara-hills-hyderabad-80479",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "112288",
                    name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
                    cloudinaryImageId: "ihhogbpgpudzvikwmzjg",
                    locality: "THE LOP STOP ICE CREAM",
                    areaName: "Basheer Bagh",
                    costForTwo: "₹100 for two",
                    cuisines: [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                    ],
                    avgRating: 4.5,
                    veg: true,
                    feeDetails: {
                        restaurantId: "112288",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3100
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3100
                    },
                    parentId: "582",
                    avgRatingString: "4.5",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 26,
                        lastMileTravel: 3.7,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "3.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:00:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "pureveg",
                                            imageId: "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-the-lop-stop-ice-cream-basheer-bagh-hyderabad-112288",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "4138",
                    name: "Grand Hotel",
                    cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
                    locality: "Abids",
                    areaName: "Abids",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Biryani",
                        "Chinese",
                        "Tandoor",
                        "Haleem"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "4138",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 5000
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 5000
                    },
                    parentId: "4001",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 34,
                        lastMileTravel: 5.6,
                        serviceability: "SERVICEABLE",
                        slaString: "34 mins",
                        lastMileTravelString: "5.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-23 00:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/grand-hotel-abids-hyderabad-4138",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "23698",
                    name: "McDonald's",
                    cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                    locality: "City Center Mall",
                    areaName: "Banjara Hills",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "23698",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "630",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 0.7,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "0.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 22:45:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/mcdonalds-city-center-mall-banjara-hills-hyderabad-23698",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "26324",
                    name: "KFC",
                    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                    locality: "Gvk One Mall",
                    areaName: "Banjara Hills",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                    ],
                    avgRating: 4,
                    feeDetails: {
                        restaurantId: "26324",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "547",
                    avgRatingString: "4.0",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.5,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "1.5 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/kfc-gvk-one-mall-banjara-hills-hyderabad-26324",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "8784",
                    name: "Burger King",
                    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                    locality: "Road no 1",
                    areaName: "Banjara Hills",
                    costForTwo: "₹350 for two",
                    cuisines: [
                        "Burgers",
                        "American"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "8784",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "166",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 22,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹159"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/burger-king-road-no-1-banjara-hills-hyderabad-8784",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "24622",
                    name: "Domino's Pizza",
                    cloudinaryImageId: "gronja3yeannuvwwjwua",
                    locality: "Masab Tank",
                    areaName: "Banjara Hills",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                    ],
                    avgRating: 3.9,
                    feeDetails: {
                        restaurantId: "24622",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "2456",
                    avgRatingString: "3.9",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 25,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:59:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/dominos-pizza-masab-tank-banjara-hills-hyderabad-24622",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "173464",
                    name: "Pizza Hut",
                    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                    locality: "Banjara Hills",
                    areaName: "Banjara Hills",
                    costForTwo: "₹350 for two",
                    cuisines: [
                        "Pizzas"
                    ],
                    avgRating: 3.8,
                    feeDetails: {
                        restaurantId: "173464",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3200
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3200
                    },
                    parentId: "721",
                    avgRatingString: "3.8",
                    totalRatingsString: "1K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 22:45:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/pizza-hut-banjara-hills-hyderabad-173464",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "376914",
                    name: "Theobroma",
                    cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
                    locality: "Central Zone",
                    areaName: "Somajiguda & Khairtabad",
                    costForTwo: "₹500 for two",
                    cuisines: [
                        "Desserts"
                    ],
                    avgRating: 4.5,
                    feeDetails: {
                        restaurantId: "376914",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3200
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3200
                    },
                    parentId: "1040",
                    avgRatingString: "4.5",
                    totalRatingsString: "1K+",
                    sla: {
                        deliveryTime: 18,
                        lastMileTravel: 2.4,
                        serviceability: "SERVICEABLE",
                        slaString: "18 mins",
                        lastMileTravelString: "2.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-23 00:00:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "newg.png",
                                description: "Gourmet"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "Gourmet",
                                            imageId: "newg.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "ABOVE ₹159",
                        discountTag: "FLAT DEAL"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "312149",
                    name: "Wow! Momo",
                    cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
                    locality: "Banjara Hills",
                    areaName: "Banjara Hills",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                    ],
                    avgRating: 3.9,
                    feeDetails: {
                        restaurantId: "312149",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "1776",
                    avgRatingString: "3.9",
                    totalRatingsString: "1K+",
                    sla: {
                        deliveryTime: 27,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-23 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/wow-momo-banjara-hills-hyderabad-312149",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "15160",
                    name: "Faasos - Wraps & Rolls",
                    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
                    locality: "Union Bank of India Colony",
                    areaName: "Banjara Hills",
                    costForTwo: "₹200 for two",
                    cuisines: [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                    ],
                    avgRating: 4.1,
                    feeDetails: {
                        restaurantId: "15160",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "21809",
                    avgRatingString: "4.1",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 30,
                        lastMileTravel: 2.9,
                        serviceability: "SERVICEABLE",
                        slaString: "30 mins",
                        lastMileTravelString: "2.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:59:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹100 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-union-bank-of-india-colony-banjara-hills-hyderabad-15160",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "124165",
                    name: "Starbucks Coffee",
                    cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
                    locality: "GVK1 Mall",
                    areaName: "Banjara Hills",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "124165",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "195515",
                    avgRatingString: "4.2",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.4,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "1.4 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 22:00:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/starbucks-coffee-gvk1-mall-banjara-hills-hyderabad-124165",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "410945",
                    name: "EatFit",
                    cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
                    locality: "Pizza hut building, Circle No.10",
                    areaName: "Jubilee Hils",
                    costForTwo: "₹270 for two",
                    cuisines: [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "410945",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 5000
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 5000
                    },
                    parentId: "76139",
                    avgRatingString: "4.2",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 30,
                        lastMileTravel: 5.6,
                        serviceability: "SERVICEABLE",
                        slaString: "30 mins",
                        lastMileTravelString: "5.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:59:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "brand",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "brand"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/eatfit-pizza-hut-building-circle-no-10-jubilee-hils-hyderabad-410945",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "262382",
                    name: "Istah - The Mediterranean Way",
                    cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
                    locality: "Sheikpet Village",
                    areaName: "Banjara Hills",
                    costForTwo: "₹250 for two",
                    cuisines: [
                        "Mediterranean",
                        "Snacks",
                        "Biryani",
                        "Grill",
                        "Kebabs",
                        "Arabian",
                        "Lebanese",
                        "Beverages",
                        "Desserts",
                        "Italian",
                        "Turkish"
                    ],
                    avgRating: 4.2,
                    feeDetails: {
                        restaurantId: "262382",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2500
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2500
                    },
                    parentId: "3518",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.3,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "1.3 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:30:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                description: "OnlyOnSwiggy"
                            }
                        ],
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "OnlyOnSwiggy",
                                            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹139"
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-sheikpet-village-banjara-hills-hyderabad-262382",
                    type: "WEBLINK"
                }
            },
            {
                info: {
                    id: "56268",
                    name: "The Belgian Waffle Co.",
                    cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
                    locality: "Next galleria mall",
                    areaName: "Punjagutta",
                    costForTwo: "₹200 for two",
                    cuisines: [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                    ],
                    avgRating: 4.4,
                    veg: true,
                    feeDetails: {
                        restaurantId: "56268",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3700
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3700
                    },
                    parentId: "2233",
                    avgRatingString: "4.4",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 35,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "35 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-22 23:57:00",
                        opened: true
                    },
                    badges: {
                        imageBadges: [
                            {
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                                description: "pureveg"
                            }
                        ]
                    },
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "pureveg",
                                            imageId: "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {},
                cta: {
                    link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-next-galleria-mall-punjagutta-hyderabad-56268",
                    type: "WEBLINK"
                }
            }
        ];

        setonlineDeliveryRestaureant(onlineDeliveryRestaurantData)
    }




    ///// SHIMMER COMPONENTS MEANS (CONDITIONAL-RENDERING)/////
    if (ToprestarantData.length === 0) {

        return <Shimmer />
    }

    if (whatsOnData.length === 0) {
        return (

            <Shimmer />
        )
    }


    return (

        <div className="body">
            {/************** BEST-OFFERS ***************/}
            <div className="container">
                <h4 className="pt-5 fw-bold py-2">Best Offers for you</h4>
                <div className="row">

                    {
                        bestOffersData.map((besoffer) =>
                            <div className="col">
                                <BestOffers bestoff={besoffer} />
                            </div>
                        )}

                </div>

            </div>

            {/****************** What's On Your Mind ******************/}
            <div className="container my-2">
                <div className="row mt-5 py-2">
                    <div className="col-lg-6">
                        <h4 className="fw-bold">{userName.name}, what's on your mind?</h4>
                    </div>

                    <div className="col-lg-6">
                        <input type="search" placeholder="search for food" value={whatsFood} onChange={(event) => {
                            setWhatsFood(event.target.value)
                        }} />
                    </div>
                </div>

                <div className="row">
                    {
                        whatsOnData.filter((searchwhatsFood) => (
                            searchwhatsFood.action.text.toLowerCase().includes((whatsFood))
                        )).map((fooditem) =>
                            <div className="col-lg-2 col-md-3 col-4">
                                <UserLooksFor food={fooditem} />
                            </div>
                        )
                    }
                </div>
                <hr />
            </div>



            {/********* TOP RESTARENTS IN HYDERABAD *********/}

            {/********** FILTER-BUTTONS **********/}
            <div className="container">
                <div className="row my-4">
                    <div className="col-12-12 col-lg-4 col-md-6">
                        <h5 className=" fw-bold">
                            Top restaurants  in Hyderabad</h5>
                    </div>

                    <div className="col-12-12 col-lg-8">
                        {/********** SEARCH BUTTON **********/}
                        <input type="search" style={{ textAlign: "left", cursor: "auto" }} value={search} placeholder="search for restaurant" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                        {/* <button className="btn btn-danger" onClick={() => {

                            let searchFood = ToprestarantData.filter((food) => food.info.name.toLowerCase().includes((search.toLowerCase())))
                            filterrestaurent(searchFood)

                        }}><i class="bi bi-search text-light"></i></button> */}
                    </div>

                </div>
                <div className="">
                    {/********* BUTTON-1 *********/}
                    <button className="btn btn-outline-primary" onClick={() => {
                        let AllResto = AllRestaurant.filter((resto) => resto.ToprestarantData = ToprestarantData)
                        console.log(AllResto)
                        filterrestaurent(AllResto)
                    }}>All</button>

                    {/********* BUTTON-2 *********/}
                    <button className="btn btn-outline-warning mx-1" onClick={() => {
                        let AvgRate = avgRate.filter((resto) => (resto.info.avgRating > 4))
                        filterrestaurent(AvgRate)
                        console.log(AvgRate)
                    }}
                    ><small>Ratings 4+</small></button>

                    {/********** BUTTON-3 **********/}
                    <button className="btn btn-outline-success mx-1" onClick={() => {

                        let costResto = costForTwo.filter((rest) => rest.info.costForTwo > "₹200 for two")
                        filterrestaurent(costResto)
                        console.log(costResto)

                    }}><small>less than Rs.200</small></button>

                    {/********** BUTTON-4 **********/}
                    {/* <button className="btn btn-outline-success mx-1" onClick={() => {

                        let nearbyResto = nearTwokmResto.filter((rest) => rest.info.feeDetails.fees.fee == 3700)
                        filterrestaurent(nearbyResto)
                        console.log(nearbyResto)

                    }}><small>nearby 2Km</small></button> */}
                </div>

                {/* TOP RESTAURENT DATA (MAP) BELOW */}
                <div className="row py-3" >
                    {
                        ToprestarantData.filter((searchfood) => (
                            searchfood.info.name.toLowerCase().includes((search))
                        )).map((restarent) => (
                            <div className="col-lg-3 col-md-3 col-6 py-2" >

                                <Link to={"/restomenu/" + restarent.info.id} className="text">
                                    {
                                        restarent.info.oneFreeDelivery ? <Delivery restoData={restarent} /> : <TopRestarentscomponent restoData={restarent} />
                                    }
                                </Link>

                            </div>
                        ))
                    }
                </div>
                <hr />
            </div>



            {/*************** RESTARENT WITH ONLINE FOOD DEVIVERY ***************/}
            <h4 className=" fw-bold mx-5 px-5 mt-5">Restaurants with online food delivery in Hyderabad</h4>
            <div className="container py-3 online-food-component">
                <div className="row">
                    {
                        onlineDeliveryRestaureant.map(onlineRestaurent =>
                            <div className="col-lg-3 col-md-3 col-4 py-2">
                                <Link to={"/restomenu/" + onlineRestaurent.info.id} className="text">  <RestarentWithOnlineFood onlineRestoDelivery={onlineRestaurent} /> </Link>
                            </div>

                        )}
                </div>


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