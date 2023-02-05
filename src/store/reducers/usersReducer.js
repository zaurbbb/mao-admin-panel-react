import {
    SET_USERS,
    SET_IS_FETCHING,
    SET_CURRENT_PAGE,
    SET_FETCH_ERROR,
} from "../consts/usersConsts";

const defaultState = {
    usersArr: [],
    isFetching: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isFetchError: false,
}

export default function usersReducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersArr: action.payload,
                isFetching: false,
                totalCount: action.payload.total_count,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.payload,
            }
        default:
            return state || defaultState;
    }
}