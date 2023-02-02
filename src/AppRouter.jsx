import React from "react";
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import {
    privateRoutes,
    publicRoutes
} from "./routes/routes";
import { authSelectors } from "./store/selectors/authSelectors";
import { useAppSelector } from "./hooks/useAppSelector";

const AppRouter = () => {
    const {isAuth} = useAppSelector(authSelectors);

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