import { SET_IS_SNACKBAR_OPENED } from "../consts/snackbarConsts";

const initialState = {
    isSnackbarOpened: true,
}

export default function snackbarReducer(state, action) {
    switch (action.type) {
        case SET_IS_SNACKBAR_OPENED:
            return {
                ...state,
                isSnackbarOpened: action.payload,
            };
        default:
            return state || initialState;
    }
}
