import {
    SET_IS_FETCHING,
    SET_POSTS,
} from "../consts/postsConsts";

const defaultState = {
    postsArr: [],
    isFetching: false,
}

export default function postsReducer(state, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                postsArr: action.payload,
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