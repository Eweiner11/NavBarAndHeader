import React from "react";
import Cart from './cart/Cart.jsx'
import HeaderItem from "./headerItem/HeaderItem.jsx";
import LanguageSelector from "./languageSelector/LanguageSelector.jsx";


import { headerIcons} from "./iconContainer/headerIcons.js";

function Header() {
  return (
    <div id="header">
      <div className="header-container">
      <LanguageSelector/>
        <div className="icon-container">
          {headerIcons.map(({src,href}) => {
            return <HeaderItem src={src} clickHandler ={()=>window.location.href=href} />;
          })}
        </div>
       <Cart src = "./assets/shopping-cart.png" cartItems ={3}/>
      </div>
    </div>
  );
}

export default Header;
