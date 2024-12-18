import { FetchProps } from "../Interfaces/actions";
import api from "../utils/api";

export const fetch: any = ({ attr, page = 1 }: FetchProps) => {
    return dispatch => {
        dispatch({
            type: "FETCH",
            payload: api.get(`/${attr}?page=${page}`),
            meta: { attr, page }
        });
    }
}

export const search: any = (meta) => {
    return dispatch => {
        dispatch({
            type: "SEARCH_LIST",
            meta
        });
    }
};

export const manageUser: any = (data) => {
    return dispatch => {
        dispatch({
            type: "ADD_USER",
            payload: data,
            meta: { attr: "users" }
        })
    }
};

export const clearState: any = (attr: string) => {
    return dispatch => {
        dispatch({
            type: "CLEAR_STATE",
            meta: { attr }
        });
    }
}

export const deleteUser: any = (userId) => {
    return dispatch => {
        dispatch({
            type: "REMOVE_USER",
            payload: { userId },
            meta: { attr: "users" }
        });
    }
}
