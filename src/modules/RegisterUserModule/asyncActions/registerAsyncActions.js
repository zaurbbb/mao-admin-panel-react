import API from "../../../api";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";

export const registerUser = (email, password, fullName, dateOfBirth, region, city, specialization) => {
    return async function (dispatch) {
        try {
            await API.post("/users/register", {
                email,
                password,
                full_name: fullName,
                date_of_birth: dateOfBirth,
                region,
                city,
                specialization
            });
            window.location.href = "/users";
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "User has been successfully registered"
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
