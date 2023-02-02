import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import {
    authStore,
    persistor
} from "./store/configureStore";

import App from "./App";
import Loader from "./loader/Loader";

import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={authStore}>
            <PersistGate
                loading={<Loader />}
                persistor={persistor}
            >
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
