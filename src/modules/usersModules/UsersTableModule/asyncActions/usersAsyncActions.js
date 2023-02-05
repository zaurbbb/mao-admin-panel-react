import {
    setFetchError,
    setIsFetching,
    setUsers
} from "../../../../store/actions/usersActions";
import {
    setIsSnackbarOpened,
    setSnackbarStatus,
    setSnackbarTextValue
} from "../../../../store/actions/snackbarActions";

import API from "../../../../api";

export const getUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/users/getUsers`);
            console.log("response", response);
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

export const deleteUser = (id) => {
    console.log("deleteUser", id);
    return async function (dispatch) {
        try {
            await API.delete(`/users/deleteUser/${id}`);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarStatus("success"));
            dispatch(setSnackbarTextValue("User has been successfully deleted"));
            window.location.reload();
        } catch (e) {
            console.log('delete user', e)
        }
    }
};