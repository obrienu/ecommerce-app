import React from "react";
import "./cart.dropdown.style.scss";
import CustomButton from "../custom-button/custom.button.component";
import CartItem from "../cart.item/cart.item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, match, toggleCart }) => {
  return (
    <div className="CartDropdown">
      <div className="CartItems">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="EmptyMessage"> Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push(`${match.url}checkout`);
          toggleCart();
        }}
        color="dark"
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchtoState = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});
export default withRouter(
  connect(mapStateToProps, mapDispatchtoState)(CartDropdown)
);
