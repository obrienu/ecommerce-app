import React from "react";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout.item/checkout.item.componentt";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import Paystack from "../../components/paystack/paystack.component";

const CheckoutPage = ({ cartItems, cartItemsTotal, user }) => {
  const userEmail = user.email;
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">Total Price: #{cartItemsTotal}</div>
      <div className="Paystack">
        <Paystack total={cartItemsTotal} email={userEmail} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
  user: selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);
