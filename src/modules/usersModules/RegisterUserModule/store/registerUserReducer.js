import {
    REGISTER_USER,
} from "./registerUserConsts";

export const initialState = {
    usersList: [],
}

export default function registerUserReducer(state, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state || initialState;
    }
}

export const setUsers = (user) => ({
    type: REGISTER_USER,
    payload: user,
});