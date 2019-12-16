import { TOGGLE_CART } from "./cart.types";
import { ADD_ITEMS } from "./cart.types";

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEMS,
    payload: item
  };
};
