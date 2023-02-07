import {
    SET_IS_FETCHING,
    SET_USERS
} from "../consts/usersConsts";

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});