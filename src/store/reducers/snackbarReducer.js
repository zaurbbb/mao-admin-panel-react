import {
    SET_IS_SNACKBAR_OPENED,
    SET_SNACKBAR_CONTENT
} from "../consts/snackbarConsts";

const initialState = {
    isSnackbarOpened: false,
    snackbarContent: {status: "", textValue: ""},
}

export default function snackbarReducer(state, action) {
    switch (action.type) {
        case SET_IS_SNACKBAR_OPENED:
            return {
                ...state,
                isSnackbarOpened: action.payload,
            };
        case SET_SNACKBAR_CONTENT:
            return {
                ...state,
                snackbarContent: action.payload,
            };
        default:
            return state || initialState;
    }
}
