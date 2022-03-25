import { useState, useRef } from "react";
import React from "react";
import { useEffect } from "react";

function SearchButton({mobile = false , searchIcon = "./assets/mobile-search.png"}) {
  const [searchActive, toggleSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const inputBoxRef = useRef();
  

  useEffect(() => {
    if (searchActive) inputBoxRef.current.focus();
  });

  function handleClick(searchBool) {
    toggleSearchActive(!searchBool);
  }
  function onChange(e) {
    setSearchValue(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    
  }
  function renderSearch(searchBool) {
    if (!searchBool)
      return (
        <div
          className={`${mobile!==true ?'search':null}flex-center hover-accent search-button`}
          onClick={() => handleClick(searchActive)}
        >
        
         {mobile!==true ? <><p>Search</p> <img src={searchIcon} alt ="image not found" /></>: <img src={searchIcon} alt ="image not found" />}
        </div>
      );

    return (
      <input
        className = {mobile!==true? 'search-active': 'mobile-search-active'}
        ref={inputBoxRef}
        type="text"
        value={searchValue}
        onChange={(e) => onChange(e)}
        onSubmit={(e) => onSubmit(e)}
        onBlur={() => handleClick(searchActive)}
      />
    );
  }



  return (
    <div className={'search-button hover flex-center'}>{renderSearch(searchActive)}</div>
  );
}

export default SearchButton;
