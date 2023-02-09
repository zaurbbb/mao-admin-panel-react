import {
    SET_IS_FETCHING,
    SET_MEDICINE_ITEM,
    SET_MEDICINES_ARR,
} from "../consts/medicinesConsts";

const defaultState = {
    medicinesArr: [],
    medicineItem: {},
    isFetching: false,
}

export default function medicinesReducer(state, action) {
    switch (action.type) {
        case SET_MEDICINES_ARR:
            return {
                ...state,
                medicinesArr: action.payload,
                isFetching: false,
            };
        case SET_MEDICINE_ITEM:
            return {
                ...state,
                medicineItem: action.payload,
                isFetching: false,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        default:
            return state || defaultState;
    }
}