import { SET_IS_AUTH } from "../consts/authConsts";

const initialState = {
    isAuth: false,
}

export default function authReducer(state, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            };
        default:
            return state || initialState;
    }
}

