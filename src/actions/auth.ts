import api from "../utils/api";

export const login: any = (data) => {
    return (dispatch: any) => {
        dispatch({
            type: "LOGIN",
            payload: api.post(`login`, data)
        })
    }
}

export const logout: any = () => {
    return dispatch => {
        dispatch({
            type: "logout"
        })
    }
};
