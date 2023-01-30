import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
});

export const usersStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));