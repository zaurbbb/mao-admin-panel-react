import {
    setIsFetching,
    setUsers
} from "../../../store/actions/usersActions";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";

import API from "../../../api";

export const getUsers = () => {
    return async function (dispatch){
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/users/getUsers`);
            dispatch(setUsers(response.data.users));
            dispatch(setIsFetching(false));
        } catch (e) {
            console.log("e", e)
            dispatch(setIsFetching(false));
        }
    }
};

export const deleteUser = (id) => {
    console.log("deleteUser", id);
    return async function (dispatch) {
        try {
            await API.delete(`/users/deleteUser/${id}`);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "User has been successfully deleted"
            }));
            window.location.reload();
        } catch (e) {
            console.log("delete user", e)
        }
    }
};