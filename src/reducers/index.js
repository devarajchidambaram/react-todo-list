import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authenticationReducer from './authenticationReducer';

// Combine all reducers as root reducer
export default combineReducers({
    todoReducer,
    authenticationReducer
});