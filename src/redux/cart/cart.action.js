import { TOGGLE_CART } from "./cart.types";
import { ADD_ITEMS } from "./cart.types";
import { DELETE_ITEMS } from "./cart.types";
import { INCREASE_QUANTITY } from "./cart.types";
import { DECREASE_QUANTITY } from "./cart.types";

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

export const deleteItem = item => {
  return {
    type: DELETE_ITEMS,
    payload: item
  };
};

export const increaseItem = item => {
  return {
    type: INCREASE_QUANTITY,
    payload: item
  };
};

export const decreaseItem = item => {
  return {
    type: DECREASE_QUANTITY,
    payload: item
  };
};
