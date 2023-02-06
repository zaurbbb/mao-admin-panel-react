import React, {
    Suspense,
    useEffect
} from "react";

import { useAppDispatch } from "./hooks/useAppDispatch";
import { setIsAuth } from "./store/actions/authActions";
import { setIsSnackbarOpened } from "./store/actions/snackbarActions";
import { authSelectors } from "./store/selectors/authSelectors";
import { snackbarSelectors } from "./store/selectors/snackbarSelectors";
import { useAppSelector } from "./hooks/useAppSelector";

import SidebarComponent from "./components/SidebarComponent";
import SnackbarComponent from "./components/SnackbarComponent";
import Loader from "./loader/Loader";

const LazyAppRouter = React.lazy(() => import("./AppRouter"));
const App = () => {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(authSelectors);
    const { isSnackbarOpened } = useAppSelector(snackbarSelectors);

    useEffect(() => {
        if (isAuth) {
            dispatch(setIsAuth(true));
        }
    }, [isAuth, dispatch]);

    useEffect(() => {
        if (isSnackbarOpened) {
            setTimeout(() => {
                dispatch(setIsSnackbarOpened(false));
            }, 6000);
        }
    }, [isSnackbarOpened, dispatch]);

    return (
        <div className="app">
            <SidebarComponent />
            <main>
                <Suspense fallback={<Loader />}>
                    <LazyAppRouter />
                </Suspense>
            </main>
            <SnackbarComponent />
        </div>
    );
};

export default App;