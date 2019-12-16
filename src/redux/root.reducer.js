import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import headerReducer from "./header/header.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  header: headerReducer,
  cart: cartReducer
});
