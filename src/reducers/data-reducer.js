import { LOGIN_USER } from "../actions/data-actions";

const initialState = {
    isAuth: false
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}