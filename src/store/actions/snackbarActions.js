import {
    SET_IS_SNACKBAR_OPENED,
    SET_SNACKBAR_CONTENT,
} from "../consts/snackbarConsts";

export const setIsSnackbarOpened = (isSnackbarOpened) => ({
    type: SET_IS_SNACKBAR_OPENED,
    payload: isSnackbarOpened,
});

export const setSnackbarContent = (snackbarContent) => ({
    type: SET_SNACKBAR_CONTENT,
    payload: snackbarContent,
});