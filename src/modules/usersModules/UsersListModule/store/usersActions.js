import API from "../../../../api";
import {
    setFetchError,
    setIsFetching,
    setUsers
} from "./usersReducer";

export const getUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/users/getUsers`);
            console.log("response.data.users", response.data.users);
            dispatch(setUsers(response.data.users));
            dispatch(setIsFetching(false));

        } catch (e) {
            console.log("e", e)
            dispatch(setFetchError(true));
            dispatch(setIsFetching(false));
            // setTimeout(() => {
            //     dispatch(setFetchError(false));
            // }, 3000);
        }
    }
};