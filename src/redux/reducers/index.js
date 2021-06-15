import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import filters from "./filters";
import products from "./products";
import product from "./product";
import cart from "./cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  filters,
  products,
  cart,
  product,
});

export default persistReducer(persistConfig, rootReducer);
