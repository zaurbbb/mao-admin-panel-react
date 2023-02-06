import React from "react";

import { setIsAuth } from "../../../../store/actions/authActions";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";

import HeaderComponent from "../../../../components/HeaderComponent";
import FormElementComponent from "../../../../components/FormElementComponent";

const LoginModule = () => {
    const dispatch = useAppDispatch();

    const login = event => {
        event.preventDefault();
        dispatch(setIsAuth(true));
    };
    return (
        <section className="login">
            <HeaderComponent textValue="Login to the admin panel" />
            <FormElementComponent
                inputType={"submit"}
                inputValue={"Сlick"}
                inputOnClick={login}
            />
        </section>
    );
};

export default LoginModule;