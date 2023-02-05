import {
    SET_IS_SNACKBAR_OPENED,
    SET_SNACKBAR_TEXT_VALUE,
    SET_SNACKBAR_STATUS
} from "../consts/snackbarConsts";

const initialState = {
    isSnackbarOpened: false,
    snackbarTextValue: "",
    snackbarStatus: "",
}

export default function snackbarReducer(state, action) {
    switch (action.type) {
        case SET_IS_SNACKBAR_OPENED:
            return {
                ...state,
                isSnackbarOpened: action.payload,
            };
        case SET_SNACKBAR_TEXT_VALUE:
            return {
                ...state,
                snackbarTextValue: action.payload,
            };
        case SET_SNACKBAR_STATUS:
            return {
                ...state,
                snackbarStatus: action.payload,
            };
        default:
            return state || initialState;
    }
}
