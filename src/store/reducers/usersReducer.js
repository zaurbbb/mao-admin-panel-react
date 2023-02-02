const SET_USERS = "SET_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";

const defaultState = {
    items: [],
    isFetching: true,
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
                items: action.payload,
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

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});
export const setFetchError = (bool) => ({
    type: SET_FETCH_ERROR,
    payload: bool,
});