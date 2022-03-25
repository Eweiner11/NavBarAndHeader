import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/header/Header.jsx";
import Nav from "./components/mainNav/Nav.jsx";
import MobileNav from "./components/mobileNav/MobileNav.jsx";

function App() {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  },[]);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
return <>

{width > 1200? <> <Header /><Nav /></>:<MobileNav/>}



</>
 
}
export default hot(App);
