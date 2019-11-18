import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// Combine all reducers as root reducer
export default combineReducers({todos_reducer: todoReducer});