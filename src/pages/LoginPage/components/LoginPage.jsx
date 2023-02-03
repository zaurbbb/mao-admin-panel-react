import React from "react";

import { setIsAuth } from "../../../store/actions/authActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const LoginPage = () => {
    const dispatch = useAppDispatch();

    const login = event => {
        event.preventDefault();
        dispatch(setIsAuth(true));
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={login}>btn</button>
        </div>
    );
};

export default LoginPage;