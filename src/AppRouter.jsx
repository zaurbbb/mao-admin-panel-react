import React from "react";
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import {
    privateRoutes,
    publicRoutes
} from "./router/routes";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <Routes>
            {isAuth
                ?
                <>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}

                    <Route
                        path="*"
                        element={
                            <Navigate
                                to="/"
                                replace
                            />
                        }
                    />
                </>
                :
                <>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.id}
                            element={route.component}
                            path={route.path}
                        />
                    )}
                    <Route
                        path="*"
                        element={
                            <Navigate
                                to="/login"
                                replace
                            />
                        }
                    />
                </>
            }
        </Routes>
    );
};

export default AppRouter;