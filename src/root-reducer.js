import { combineReducers } from "redux";
import { phoneReducer } from "./reducers/phone-reducer";
const rootReducer = combineReducers({
  phones: phoneReducer,
});
export default rootReducer;
