import React from 'react';
import { menuData } from './menuData.js';
import MenuItem from './MenuItem.jsx'


function Menu({selection}) {
  return(
    <div className="bottom-container">

    {menuData[selection].map(item =>{
        return <MenuItem title ={item.title} href = {item.link}/>
    })}

 
  </div>);
  
}

export default Menu;
