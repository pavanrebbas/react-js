import React from "react";
import ReactDOM from "react-dom";

/*
  we have some div's and in that codes (Nested)
 
      <div id="parent">
        <div id="child">
            <h1 id="text"></h1>
            <p id='text-1'></p>
        </div>
    </div>
*/

// This a react create element
const nesteddivs = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' }, React.createElement('h3', { id: 'text' }, ' My name is pavankumar and i,m a Frontend Developer'),
        React.createElement('p', { id: 'text' }, ' My name is pavankumar and i,m a Frontend Developer')),

);
// console.log(nesteddivs)



// JSX:: It is a combination of (HTML AND JAVASCRIPT) SYNTAXES AND STURCTURE

const names = {

    name: 'pavan',
    id: '61'
};


const Jsxdivisitions = <div>
    <h1 id="text" className="text">My name is {names.name} and my id is {names.id}</h1>
</div>




// REACT COMPONENTS::

// Everything in recact compomtend in (2 ways)
//1. Class based component (Old vay)
//2. function/method based components (Advance way)

const ButtonComponent = () => (
    <input type="text" />
);


const HeaderComponent = () => (


    <h2 class="header">my name is <ButtonComponent></ButtonComponent></h2>

);


const ContentComponent = () => (

    <div class="content"><h4>This is my content and </h4></div>


);


const FooterComponent = () => (

    <div class="footer">
        <h2>Footer</h2>
    </div>

);


const TotalComponents = () => (

    <div >
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
    </div>

);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TotalComponents/>); // React Js element to HTML Element




