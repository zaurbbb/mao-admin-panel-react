import { SET_IS_AUTH } from "../consts/authConsts";

export const setIsAuth = (isAuthStatus) => ({
    type: SET_IS_AUTH,
    payload: isAuthStatus,
});