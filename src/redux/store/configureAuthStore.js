import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux"
import {
    persistStore,
    persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../reducers/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const authStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(authStore);