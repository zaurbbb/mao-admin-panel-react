import React from "react";
import { setIsSnackbarOpened } from "../../store/actions/snackbarActions";
import { useDispatch } from "react-redux";

const Snackbar = () => {
    const dispatch = useDispatch();

    function onCloseSnackbar() {
        dispatch(setIsSnackbarOpened(false));
    }

    return (
        <div className="snackbar">
            <div className="snackbar__label">auf</div>
            <div className="snackbar__dismiss" onClick={onCloseSnackbar}>
                &times;
            </div>
        </div>
    );
};
export default Snackbar;