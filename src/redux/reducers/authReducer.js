import {
    SET_AUTH,
} from "../consts/caseConsts";
import { initialState } from "../consts/initialState";

export default function authReducer(state, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
            };
        default:
            return state || initialState;
    }
}
