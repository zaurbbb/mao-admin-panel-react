import {
    SET_IS_FETCHING,
    SET_MEDICINES
} from "../consts/medicinesConsts";

export const setMedicines = (medicines) => ({
    type: SET_MEDICINES,
    payload: medicines,
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});