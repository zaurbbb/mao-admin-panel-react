import React from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import {
    registerStore,
    persistor
} from "../store/configureRegisterUserStore";

import RegisterUserForm from "./RegisterUserForm";
import Loader from "../../../../loader/Loader";

const RegisterUserModule = () => {
    return (
        <Provider store={registerStore}>
            <PersistGate
                loading={<Loader />}
                persistor={persistor}
            >
                <RegisterUserForm />
            </PersistGate>
        </Provider>
    );
};

export default RegisterUserModule;