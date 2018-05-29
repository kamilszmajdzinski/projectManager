export const LOGIN_USER = 'LOGIN_USER'
export const GET_PROJECTS = 'GET_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const GET_AVAILABLE_PROJECTS = 'GET_AVAILABLE_PROJECTS'

export const activeProjects = []

export const loginUser = () => {
    return dispatch => {
        dispatch({ type: LOGIN_USER });
    }
}

export const getAvailableProjects = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(projects => dispatch({type: GET_AVAILABLE_PROJECTS, projects}))
    }
}

export const addProject = (project) => {
    return dispatch => {
        activeProjects.push(project)
        dispatch({ type: ADD_PROJECT })
    }
}


export const getProjects = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECTS })
    }
}
