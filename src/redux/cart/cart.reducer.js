import { TOGGLE_CART } from "./cart.types";
import { ADD_ITEMS } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { DELETE_ITEMS } from "./cart.types";
import { deleteItemFromCart } from "./cart.utils";
import { increaseCartItem } from "./cart.utils";
import { decreaseCartItem } from "./cart.utils";
import { DECREASE_QUANTITY } from "./cart.types";
import { INCREASE_QUANTITY } from "./cart.types";

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
    case DELETE_ITEMS:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload)
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseCartItem(state.cartItems, action.payload)
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
