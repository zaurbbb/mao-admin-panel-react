import {
    setFetchError,
    setIsFetching,
    setUsers
} from "../../../../store/actions/usersActions";
import API from "../../../../api/index";

export const getUsers = (dispatch) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/users/getUsers`);
            dispatch(setUsers(response.data.users));
            dispatch(setIsFetching(false));

        } catch (e) {
            console.log("e", e)
            dispatch(setFetchError(true));
            dispatch(setIsFetching(false));
            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 3000);
        }
    }
};