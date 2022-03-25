import React, { useState } from "react";
import HeaderItem from "../header/headerItem/HeaderItem.jsx";
import Logo from "../mainNav/logo/Logo.jsx";
import { mobileNavIcons } from "./mobileNavIcons.js";
import Cart from "../header/cart/Cart.jsx";
import MobileMenu from "../mobileMenu/MobileMenu.jsx";
import SearchButton from "../mainNav/searchButton/SearchButton.jsx";

function MobileNav() {
  const [cartItems, setCartItems] = useState(3);
  const [menuOpen, toggleMenuOpen] = useState(false);
  const hamburgerMenu = "./assets/mobile-hamburger.png";
  const mobileLogo = "./assets/mobile-logo.png";

  function toggleMenu() {
    toggleMenuOpen(!menuOpen);
  }

  function handleRender(menuBool) {
    if (menuBool) return <MobileMenu toggleMenu={toggleMenu} />;

    return (
      <div className="mobile-nav-container flex-center">
        <span className="left-mobile-section flex-center">
          <HeaderItem src={hamburgerMenu} clickHandler={toggleMenu} />
          <Logo src={mobileLogo} />
        </span>
        <span className="right-mobile-section flex-center">
          <SearchButton mobile={true} />
          {mobileNavIcons.map(({ src,href }) => {
            return <HeaderItem src={src} clickHandler={()=>window.location.href=href} />;
          })}
          <Cart src="./assets/mobile-shopping-cart.png" cartItems={cartItems} />
        </span>
      </div>
    );
  }

  return handleRender(menuOpen);
}

export default MobileNav;
