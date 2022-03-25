import React from "react";

function NavItem({
  toggleDropDown,
  title,
  setDropDownItems,
  dropDownItems,
  dropDown,
}) {
  function handleClick() {
    if (dropDown) {
      if (title === dropDownItems) {
        toggleDropDown();
      } else {
        setDropDownItems(title);
      }
    } else {
      setDropDownItems(title);
      toggleDropDown();
    }
  }

  return (
    <h4
      className={`nav-item hover-accent ${
        title === dropDownItems && dropDown === true
          ? "btn-primary"
          : "btn-secondary"
      }`}
      hover
      onClick={handleClick}
    >
      {title}
    </h4>
  );
}

export default NavItem;
