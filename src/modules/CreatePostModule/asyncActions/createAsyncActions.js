import API from "../../../api";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";

export const createPost = (title, text, author, imageURL) => {
    return async function (dispatch) {
        try {
            await API.post("/posts/createPost", {
                title,
                text,
                author,
                image_url: imageURL
            });
            window.location.href = "/posts";
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "Post has been successfully created"
            }));
        } catch (error) {
            const errorMessage = error.response.data.message;
            console.log(errorMessage);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "error",
                textValue: errorMessage
            }));
            console.error("errorMessage: ", errorMessage);
        }
    }
};
