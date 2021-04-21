import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleWare = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;
