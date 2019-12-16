import { TOGGLE_MENU } from "./header.types";

const initialState = {
  showMenu: false
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    default:
      return state;
  }
};

export default headerReducer;
