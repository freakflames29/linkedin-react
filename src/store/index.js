import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"

// import {thunkMidd} from "redux-thunk";

import rootReducers from "../reducers/index.js";

const store = createStore(rootReducers,  applyMiddleware(thunk));
export default store;
