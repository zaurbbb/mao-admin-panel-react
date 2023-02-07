import {
    SET_IS_FETCHING,
    SET_USERS,
} from "../consts/usersConsts";

const defaultState = {
    usersArr: [],
    isFetching: false,
}

export default function usersReducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersArr: action.payload,
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