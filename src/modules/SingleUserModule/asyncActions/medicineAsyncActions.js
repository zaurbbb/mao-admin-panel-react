import API from "../../../api/index";
import {
    setIsFetching,
    setUsers
} from "../../../store/actions/usersActions";
export const getMedicine = (id) => {
    return async function (dispatch) {
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/api/getUser/${id}`);
            dispatch(setUsers(response.data.users));
        } catch (error) {
            // dispatch({ type: "MEDICINE_ERROR", payload: error });
        }
    }
}