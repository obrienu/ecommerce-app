import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, initial) => acc + initial.quantity, 0)
);

export const selectShowCart = createSelector(
  [selectCart],
  cart => cart.showCart
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
