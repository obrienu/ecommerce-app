import { TOGGLE_CART } from "./cart.types";
import { ADD_ITEMS } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  showCart: false,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    case ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
