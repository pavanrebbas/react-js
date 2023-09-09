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
// import { ToprestarantData } from "../utilities/mockData.js";
import { onlineFoodDelivery } from "../utilities/mockData.js";
import { useEffect, useState } from "react";
import { Shimmer } from "./shimmer.js";
import { Link } from "react-router-dom";



const Bodycomponent = () => {

    // TOP-RESTAURENT-DATA
    let [ToprestarantData, filterrestaurent] = useState([]);

    useEffect(() => {
        //TOP-RESTO-FETCH-DATA BY USING JAVASCRIPT FETCH METHOD LIKE (CALLBACK-METHOD)
        topRestofetchData();
    }, []);



    //////TOP-RESTO-FECTH-DATA///////////
    const topRestofetchData = async () => {
        const restData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.41113717402138&lng=78.4521259367466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const orginalData = await restData.json();
        console.log(orginalData)
        // const apidta = orginalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        const topRestoApiList = [
            {
                info: {
                    id: "738039",
                    name: "James bond Food court",
                    cloudinaryImageId: "9cf5be9a1d50bc7543796d5d7bcd6f9a",
                    locality: "Balkampet Rd",
                    areaName: "Ameerpet",
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
                    link: "https://www.swiggy.com/restaurants/james-bond-food-court-balkampet-rd-ameerpet-hyderabad-738039",
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
        filterrestaurent(topRestoApiList)
    }



    ///// SHIMMER COMPONENTS MEANS (CONDITIONAL-RENDERING)/////
    if (ToprestarantData.length === 0) {

        return <Shimmer></Shimmer>
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
                <h4 className="fw-bold  mt-5">{userName.name}, what's on your mind?</h4>
                <div className="row">
                    {
                        FoodData.map((fooditem) =>
                            <div className="col">
                                <UserLooksFor food={fooditem} />
                            </div>
                        )}
                </div>

                <hr />
            </div>



            {/********* TOP RESTARENTS IN HYDERABAD *********/}

            {/********** FILTER-BUTTONS **********/}
            <div className="container">
                <h4 className=" fw-bold py-4">
                    Top restaurants  in Hyderabad</h4>
                <div className="row">
                    {/********* BUTTON-1 *********/}
                    <div className="col-2">
                        <button className="btn btn-outline-warning" onClick={() => {
                            let filterresto = ToprestarantData.filter((resto) => (resto.info.avgRating > 4))
                            filterrestaurent(filterresto)
                        }}
                        >Ratings 4+</button>
                    </div>

                    {/********** BUTTON-2 **********/}
                    <div className="col-2">
                        <button className="btn btn-outline-success" onClick={() => {
                            let filterresto = ToprestarantData.filter((resto) => (resto.info.veg == true))
                            filterrestaurent(filterresto)
                        }}
                        >veg Items</button>
                    </div>
                </div>

                <div className="row py-3" >
                    {
                        ToprestarantData.map((restarent) => (
                            <div className="col-lg-3 col-md-3 col-4 py-2" >
                                <Link to={ "restomenu/" + restarent.info.id } className="text"> <TopRestarentscomponent restoData={restarent} /> </Link>
                            </div>
                        ))
                    }
                </div>
                <hr />
            </div>



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