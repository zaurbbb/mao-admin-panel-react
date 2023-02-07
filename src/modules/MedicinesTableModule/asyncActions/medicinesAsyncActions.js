import {
    setIsFetching,
    setMedicines
} from "../../../store/actions/medicinesActions";

import API from "../../../api";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";

export const getMedicines = () => {
    return async function (dispatch){
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/med/getCatalogue`);
            dispatch(setMedicines(response.data.catalogue));
            dispatch(setIsFetching(false));
        } catch (e) {
            console.log("e", e)
            dispatch(setIsFetching(false));
        }
    }
};

export const deleteMedicine = (id) => {
    return async function (dispatch) {
        try {
            await API.delete(`/med/deleteMedicament/${id}`);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "Medicine has been successfully removed from the catalogue"
            }));
            window.location.reload();
        } catch (e) {
            console.log("delete user", e)
        }
    }
};
