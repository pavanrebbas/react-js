import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponet from "./components/Header.js";
import Bodycomponent from "./components/body.js";
import Footercomponent from "./components/Footer.js";



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
      <Bodycomponent></Bodycomponent>
      <Footercomponent></Footercomponent>
    </div>
  )


}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />); // React Js element to HTML Element

