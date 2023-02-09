import API from "../../../api";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";
import {
    setIsFetching,
    setPosts
} from "../../../store/actions/postsActions";

export const getPosts = () => {
    return async function (dispatch){
        try {
            console.log("getPosts");
            dispatch(setIsFetching(true));
            const response = await API.get(`/posts/getPosts`);
            console.log("response", response);
            dispatch(setPosts(response.data.posts));
            dispatch(setIsFetching(false));
        } catch (e) {
            console.log("e", e)
            dispatch(setIsFetching(false));
        }
    }
};

export const deletePost = (id) => {
    return async function (dispatch) {
        try {
            await API.delete(`/posts/deletePost/${id}`);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "Post has been successfully removed from the news"
            }));
            window.location.reload();
        } catch (e) {
            console.log("delete user", e)
        }
    }
};
