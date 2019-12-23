import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import headerReducer from "./header/header.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
