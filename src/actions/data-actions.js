export const LOGIN_USER = 'LOGIN_USER'
export const GET_PROJECTS = 'GET_PROJECTS'

export const loginUser = () => {
    return dispatch => {
        dispatch({ type: LOGIN_USER });
    }
}

export const getProjects = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECTS })
    }
}