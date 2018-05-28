export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = () => {
    return dispatch => {
        dispatch({ type: LOGIN_USER });
    }
}