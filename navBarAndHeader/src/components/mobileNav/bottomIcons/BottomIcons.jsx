import React from 'react';
import {bottomNavIcons} from './bottomNavIcons.js'



function BottomIcons() {
  return <div className = 'bottom-icons-container'>
 {bottomNavIcons.map(({src,title,link}) =>{
     return <a className='flex-center bottom-icon cursor-hover' href = {link}> <img src= {src}></img><h4>{title}</h4>        </a>
 })}


  </div>
    
}

export default BottomIcons;
