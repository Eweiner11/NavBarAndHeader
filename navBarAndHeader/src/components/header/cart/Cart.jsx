import React from "react";
import HeaderItem from "../headerItem/HeaderItem.jsx";

function Cart({ cartItems, src }) {
  let href = '#'
  return (
    <div className="shopping-cart-container">
      <HeaderItem src={src} str={cartItems} clickHandler ={()=>window.location.href=href} />
    </div>
  );
}

export default Cart;
