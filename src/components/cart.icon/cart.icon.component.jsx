import React from "react";
import "./cart.icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="CartIcon">
      <ShoppingIcon className="ShoppingIcon" />
      <span className="ItemCount">0</span>
    </div>
  );
};

export default CartIcon;
