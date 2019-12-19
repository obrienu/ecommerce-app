import React from "react";
import "./cart.dropdown.style.scss";
import CustomButton from "../custom-button/custom.button.component";
import CartItem from "../cart.item/cart.item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, match }) => {
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
        onClick={() => history.push(`${match.url}checkout`)}
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
export default withRouter(connect(mapStateToProps)(CartDropdown));
