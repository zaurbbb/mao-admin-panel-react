import React, { useEffect } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    setIsAuth,
} from "./store/authReducer";

import SidebarComponent from "./components/SidebarComponent/SidebarComponent";
import AppRouter from "./AppRouter";

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (isAuth) {
            dispatch(setIsAuth(true));
        }
    }, [isAuth, dispatch]);

    return (
        <div className="app">
            <SidebarComponent />
            <main>
                <AppRouter />
            </main>
        </div>
    );
};

export default App;