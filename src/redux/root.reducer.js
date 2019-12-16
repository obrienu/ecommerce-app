import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import headerReducer from "./header/header.reducer";

export default combineReducers({
  user: userReducer,
  header: headerReducer
});
