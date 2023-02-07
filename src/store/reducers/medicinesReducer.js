import {
    SET_IS_FETCHING,
    SET_MEDICINES,
} from "../consts/medicinesConsts";

const defaultState = {
    medicinesArr: [],
    isFetching: false,
}

export default function medicinesReducer(state, action) {
    switch (action.type) {
        case SET_MEDICINES:
            return {
                ...state,
                medicinesArr: action.payload,
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