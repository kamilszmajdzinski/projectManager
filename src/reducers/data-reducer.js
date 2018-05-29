import { LOGIN_USER, GET_PROJECTS, ADD_PROJECT, GET_AVAILABLE_PROJECTS } from "../actions/data-actions";

import { activeProjects } from "../actions/data-actions";

const initialState = {
    isAuth: false,
    activeProjects: []
}



export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true
            }
        case GET_AVAILABLE_PROJECTS:
            return{
                ...state,
                availableProjects: action.projects
            }
        case ADD_PROJECT:
            return {
                ...state,
                activeProjects
            }
        case GET_PROJECTS: 
            return{
                ...state,
            }
        default:
            return state;
    }
}