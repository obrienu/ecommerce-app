import React from "react";
import "./cart.icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount }) => {
  return (
    <div className="CartIcon">
      <ShoppingIcon className="ShoppingIcon" />
      <span className="ItemCount">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, null)(CartIcon);
