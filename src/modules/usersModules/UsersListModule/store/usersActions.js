import axios from "axios";
import {
    setFetchError,
    setIsFetching,
    setUsers
} from "./usersReducer";

export const getUsers = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery === "") {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setUsers(response.data))
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