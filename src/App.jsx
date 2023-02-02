import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { setIsAuth } from "./store/actions/authActions";
import { authSelectors } from "./store/selectors/authSelectors";
import { setIsSnackbarOpened } from "./store/actions/snackbarActions";
import { snackbarSelectors } from "./store/selectors/snackbarSelectors";
import { useAppSelector } from "./hooks/useAppSelector";

import SidebarComponent from "./components/SidebarComponent/SidebarComponent";
import AppRouter from "./AppRouter";

const App = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAppSelector(authSelectors);
    const { isSnackbarOpened } = useAppSelector(snackbarSelectors);

    useEffect(() => {
        if (isAuth) {
            dispatch(setIsAuth(true));
        }
        if (isSnackbarOpened) {
            dispatch(setIsSnackbarOpened(true));
        }
    }, [isAuth, dispatch, isSnackbarOpened]);


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