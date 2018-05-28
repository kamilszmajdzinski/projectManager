import { LOGIN_USER, GET_PROJECTS } from "../actions/data-actions";
import { activeProjects } from "../data";

const initialState = {
    isAuth: false,
    activeProjects
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true
            }
        case GET_PROJECTS:
            return{
                ...state,
                activeProjects
            }
        default:
            return state;
    }
}