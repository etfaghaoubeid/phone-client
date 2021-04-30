import { combineReducers } from "redux";

import productDetailsReducer from "./components/product-details/product-details-reducer";
import productsReducer from "./components/products/products-reducer";
const rootReducer = combineReducers({
  productDetails: productDetailsReducer,
  products: productsReducer,
});
export default rootReducer;
