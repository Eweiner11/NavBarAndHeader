import React from 'react';
import MobileMenuHeader from './MobileMenuHeader.jsx';
import MobileMenuContainer from './MobileMenuContainer.jsx';
function MobileMenu({toggleMenu}) {
  return <>
  <MobileMenuHeader toggleMenu = {toggleMenu}/>
  <MobileMenuContainer/>
  </>;
}

export default MobileMenu;
