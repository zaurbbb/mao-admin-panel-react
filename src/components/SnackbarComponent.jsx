import React, { memo } from "react";

import { setIsSnackbarOpened } from "../store/actions/snackbarActions";
import { snackbarSelectors } from "../store/selectors/snackbarSelectors";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

const Snackbar = memo(() => {
    const dispatch = useAppDispatch();
    const { isSnackbarOpened, snackbarContent } = useAppSelector(snackbarSelectors);
    const snackbarStatus = snackbarContent.status;
    const snackbarTextValue = snackbarContent.textValue;

    const snackbarClassName =  `snackbar snackbar--${snackbarStatus}`;

    function onCloseSnackbar() {
        setTimeout(() => {}, 5000);
        dispatch(setIsSnackbarOpened(false));
    }

    return isSnackbarOpened && (
        <div className={snackbarClassName}>
            <div className="snackbar__label">{snackbarTextValue}</div>
            <div className="snackbar__dismiss" onClick={onCloseSnackbar}>
                &times;
            </div>
        </div>
    );
});
export default Snackbar;