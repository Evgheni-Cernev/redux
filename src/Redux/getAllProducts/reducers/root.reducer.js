import countReducer from "./count.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ count: countReducer });
export default rootReducer;