import { combineReducers } from "redux";

import authReducer from "./auth";
import fetchReducer from "./fetch";

const appReducer = combineReducers({
    auth: authReducer,
    fetch: fetchReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;
