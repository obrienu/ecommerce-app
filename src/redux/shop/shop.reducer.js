import { UPDATE_COLLECTIONS } from "./shop.types";

const initial_state = {
  shopData: null
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        shopData: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
