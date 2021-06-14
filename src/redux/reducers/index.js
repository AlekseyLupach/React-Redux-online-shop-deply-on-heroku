import { combineReducers } from "redux";

import filters from "./filters";
import products from "./products";
import product from "./product";
import cart from "./cart";

const rootReducer = combineReducers({
  filters,
  products,
  cart,
  product,
});

export default rootReducer;
