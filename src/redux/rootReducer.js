import { combineReducers } from "redux";
import listReducer from "./products/listReducer";

const rootReducer = combineReducers({
  listproduct: listReducer
});
export default rootReducer;
