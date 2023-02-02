import { SET_IS_SNACKBAR_OPENED } from "../consts/snackbarConsts";

export const setIsSnackbarOpened = (isSnackbarOpenedStatus) => ({
    type: SET_IS_SNACKBAR_OPENED,
    payload: isSnackbarOpenedStatus,
});