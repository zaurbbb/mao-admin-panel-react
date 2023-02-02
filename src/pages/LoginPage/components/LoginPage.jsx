import React from "react";
import { useDispatch } from "react-redux";

import { setIsAuth } from "../../../store/actions/authActions";

const LoginPage = () => {
    const dispatch = useDispatch();

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