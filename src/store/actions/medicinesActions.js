import {
    SET_MEDICINES_ARR,
    SET_MEDICINE_ITEM,
    SET_IS_FETCHING,
} from "../consts/medicinesConsts";

export const setMedicinesArr = (medicines) => ({
    type: SET_MEDICINES_ARR,
    payload: medicines,
});
export const setMedicineItem = (medicine) => ({
    type: SET_MEDICINE_ITEM,
    payload: medicine,
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});