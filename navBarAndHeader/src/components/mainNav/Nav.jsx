import React, { useState } from "react";
import NavItem from "./navItem/NavItem.jsx";
import { navLinks } from "./navLinks.js";
import Menu from "../menu/Menu.jsx";
import Logo from "./logo/Logo.jsx";
import SearchButton from "./searchButton/SearchButton.jsx";

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownItems, setDropDownItems] = useState("");

  function renderDropDown(rendered, selection) {
    if (!rendered) return null;
    return <Menu selection={selection} />;
  }

  function toggleDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div id="nav">
      <span className="top-container">
        <div className="nav-item-container">
          <Logo src= {"./assets/lincoln-electric-logo.png"} />
          {navLinks.map(({ title }) => {
            return (
              <NavItem
                title={title}
                dropDown={dropDown}
                dropDownItems={dropDownItems}
                toggleDropDown={toggleDropDown}
                setDropDownItems={setDropDownItems}
              />
            );
          })}
        </div>

        <SearchButton searchIcon="./assets/search-icon.png"/>
      </span>

      {renderDropDown(dropDown, dropDownItems)}
    </div>
  );
}

export default Nav;
