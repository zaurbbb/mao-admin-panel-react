import {
    SET_IS_SNACKBAR_OPENED,
    SET_SNACKBAR_TEXT_VALUE,
    SET_SNACKBAR_STATUS
} from "../consts/snackbarConsts";

export const setIsSnackbarOpened = (isSnackbarOpened) => ({
    type: SET_IS_SNACKBAR_OPENED,
    payload: isSnackbarOpened,
});

export const setSnackbarTextValue = (snackbarTextValue) => ({
    type: SET_SNACKBAR_TEXT_VALUE,
    payload: snackbarTextValue,
});
export const setSnackbarStatus = (snackbarStatus) => ({
    type: SET_SNACKBAR_STATUS,
    payload: snackbarStatus,
});