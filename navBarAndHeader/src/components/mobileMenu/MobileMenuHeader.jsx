import React from 'react';

function MobileMenuHeader({toggleMenu}) {

    function exit(){
        toggleMenu()
    }
  return <div className = 'mobile-menu-header flex-center'>
      <span className = 'left flex-center'>
      <h4>Menu</h4>
      </span>
      <span  className = 'right flex-center' onClick = {exit}>
      <p >X</p>
      </span>
      </div>
}

export default MobileMenuHeader;
