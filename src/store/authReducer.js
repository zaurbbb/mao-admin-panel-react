import { SET_AUTH } from "./authConsts";

export const initialState = {
    isAuth: false,
}
export default function authReducer(state, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            };
        default:
            return state || initialState;
    }
}

export const setIsAuth = (isAuthStatus) => ({
    type: SET_AUTH,
    payload: isAuthStatus,
});