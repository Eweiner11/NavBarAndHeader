import React, { useState } from "react";
import BottomIcons from "../mobileNav/bottomIcons/BottomIcons.jsx";
import MobileMenuItem from "./MobileMenuItem.jsx";
import BackButton from "../mobileNav/backButton/BackButton.jsx";
import { navLinks } from "../mainNav/navLinks.js";
import { menuData } from "../menu/menuData.js";

function MobileMenuContainer() {
  const [currentOptions, setCurrentOptions] = useState(navLinks);
  const mainMenuBool = currentOptions === navLinks;

  function handleClick(e, selected) {
    e.stopPropagation();
    setCurrentOptions(menuData[selected]);
  }
  function goBack() {
    setCurrentOptions(navLinks);
  }

  return (
    <div className="menu-item-container">
      {!mainMenuBool ? <BackButton goBack={goBack} />: null}
      {currentOptions.map(({ title, link }) => {
        return (
          <MobileMenuItem
            mainMenuBool={mainMenuBool}
            title={title}
            link={link}
            handleClick={handleClick}
          />
        );
      })}
      {mainMenuBool ? <BottomIcons /> : null}
    </div>
  );
}

export default MobileMenuContainer;
