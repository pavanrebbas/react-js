import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponet from "./components/Header.js";
import Bodycomponent from "./components/body.js"
import Footercomponent from "./components/Footer.js";
import About from "./components/About.js";
import Menu from "./components/Menu.js";
import Offers from "./components/Offers.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestoMenu from "./components/RestoMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



/* 
  HEADER COMPONENT
    - logo
    - menu items
    - search bar
    - offers
  --------------------------------------------
  BODY COMOPONENT::=======
     SUB-COMPONENTS{
         -Best Offers
         -what's on user mind
         - Top restauents
          - restarante with online food delivery
     }
 --------------------------------------------
  FOOTER COMPONENT
      - LOGO
      - LINKS
      - FEEDBACKS
      - CONATCT US 
      -footer
  --------------------------------------------
 */


//// APPLAYOUT//////
const AppLayout = () => {

  return (
    <div>
      <HeaderComponet></HeaderComponet>
      {/* <Bodycomponent></Bodycomponent> */}
      <Outlet></Outlet>
      {/* <Footercomponent></Footercomponent> */}
    </div>
  )

};



const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {

        path: "/",
        element: <Bodycomponent></Bodycomponent>

      },
      {

        path: "/about",
        element: <About></About>
      },

      {

        path: "/menu",
        element: <Menu></Menu>
      },

      {

        path: "/offers",
        element: <Offers></Offers>
      },

      {

        path: "/cart",
        element: <Cart></Cart>
      },

      {
        path: "restomenu/:restoid",
        element: <RestoMenu></RestoMenu>
      }

    ],
    errorElement: <Error></Error>
  },


]);






const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout />); // React Js element to HTML Element

root.render(<RouterProvider router={appRouter} />) // ROUTIING-PROVIDER RENDER

