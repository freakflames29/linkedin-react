import {combineReducers} from "redux";
import userReducers from "./userReducers.js";

const rootReducers = combineReducers({
    userState: userReducers
})

export default rootReducers;