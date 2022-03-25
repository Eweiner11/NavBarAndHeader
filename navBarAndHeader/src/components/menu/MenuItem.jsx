import React from 'react';

function MenuItem({title,href}) {
  function handleClick(href){
    window.location.href = `${href}`
  }
  return <div className = "drop-down-item " onClick = {()=>handleClick(href)}><h4 >{title}</h4></div>;
}

export default MenuItem;
