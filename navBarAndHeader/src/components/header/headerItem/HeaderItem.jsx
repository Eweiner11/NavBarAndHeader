import React from "react";

function HeaderItem({ src,str = null,clickHandler = null }) {
  function renderString() {
    if (str === null) return null;

    return <h4>{str}</h4>;
  }

  
  return (
    <div className="header-item  flex-center" onClick={clickHandler}>
      <img  src={src} alt ="image not found" />
      {renderString()}
    </div>
  );
}

export default HeaderItem;
