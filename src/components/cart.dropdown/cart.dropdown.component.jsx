import React from "react";
import "./cart.dropdown.style.scss";
import CustomButton from "../custom-button/custom.button.component";
import CartItem from "../cart.item/cart.item.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="CartDropdown">
      <div className="CartItems">
        {cartItems.map(cartItem => (
          <CartItem item={cartItem} />
        ))}
      </div>
      <CustomButton color="dark">CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(CartDropdown);
