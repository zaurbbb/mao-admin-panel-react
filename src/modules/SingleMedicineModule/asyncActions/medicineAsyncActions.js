import API from "../../../api/index";
import { setIsFetching } from "../../../store/actions/usersActions";
import { setMedicineItem } from "../../../store/actions/medicinesActions";
export const getMedicine = (id) => {
    return async function (dispatch) {
        try {
            dispatch(setIsFetching(true));
            const response = await API.get(`/med/getMedicament/${id}`);
            dispatch(setMedicineItem(response.data.medicament));
        } catch (error) {
            dispatch({ type: "MEDICINE_ERROR", payload: error });
        }
    }
}