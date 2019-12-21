import React from "react";
import "./checkout.item.style.scss";
import { deleteItem } from "../../redux/cart/cart.action";
import { decreaseItem } from "../../redux/cart/cart.action";
import { increaseItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, deleteItem, increaseItem, decreaseItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item ">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div onClick={() => deleteItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: cartItem => dispatch(deleteItem(cartItem)),
  increaseItem: cartItem => dispatch(increaseItem(cartItem)),
  decreaseItem: cartItem => dispatch(decreaseItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
