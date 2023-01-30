import { SET_AUTH } from "../consts/caseConsts";

export const setIsAuth = (isAuthStatus) => ({
    type: SET_AUTH,
    payload: isAuthStatus,
});