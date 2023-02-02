import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux"
import {
    persistStore,
    persistReducer
} from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import authReducer from "./reducers/authReducer";
import snackbarReducer from "./reducers/snackbarReducer";
import usersReducer from "./reducers/usersReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    users: usersReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const authStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(authStore);