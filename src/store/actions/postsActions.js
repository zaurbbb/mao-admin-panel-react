import {
    SET_IS_FETCHING,
    SET_POSTS
} from "../consts/postsConsts";

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});
export const setIsFetching = (bool) => ({
    type: SET_IS_FETCHING,
    payload: bool,
});