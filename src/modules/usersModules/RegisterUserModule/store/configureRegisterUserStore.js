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

import registerUserReducer from "./registerUserReducer";

export const rootReducer = combineReducers({
    usersList: registerUserReducer,
});

const persistConfig = {
    key: "register",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const registerStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(registerStore);