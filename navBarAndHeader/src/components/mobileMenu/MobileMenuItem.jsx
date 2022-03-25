import React from 'react';

function MobileMenuItem({mainMenuBool,title,link,handleClick}) {
  return <div
  className={`${
    !mainMenuBool ? "off-white" : "standard-bg"
  } mobile-menu-item bottom-border flex-center hover-cursor`}
  onClick={
    mainMenuBool
      ? (e) => handleClick(e,title)
      : () => {
          window.location.href = `${link}`;
        }
  }
>
  <span className="left">
    <h4>{title.toUpperCase()}</h4>
  </span>
  <span>
    <h4 className="right">{">"}</h4>
  </span>
</div>;
}

export default MobileMenuItem;
