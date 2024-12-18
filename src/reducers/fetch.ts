import { Reducer } from "react";
import { ListProps, loadingtypes } from "../Interfaces/actions";
import { appendData, deleteData, filter } from "../utils/helper";

export interface defaultStateProps {
    loading: loadingtypes
    data?: ListProps
    error?: null
}

export interface stateProps {
    users: defaultStateProps,
    create: { status: boolean, data?: any },
    delete: { status: boolean, data?: any }
}

const defaultState: defaultStateProps = {
    loading: "idle",
    data: {
        data: [],
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0
    },
    error: null
}

const initialState: stateProps = {
    users: defaultState,
    create: { status: false },
    delete: { status: false },
}

const fetchReducer: Reducer<stateProps, any> = (state = initialState, { type, payload, meta: { attr, needle = "" } = {} }) => {
    switch (type) {
        case "FETCH_PENDING":
            return {
                ...state,
                [attr]: {
                    loading: "pending"
                }
            }
        case "FETCH_FULFILLED":
            return {
                ...state,
                [attr]: {
                    loading: "fulfilled",
                    data: {
                        ...payload?.response?.data,
                        original: payload?.response?.data?.data
                    }
                }
            }
        case "FETCH_REJECTED":
            return {
                ...state,
                [attr]: {
                    loading: "rejected"
                }
            }
        case "SEARCH_LIST":
            return {
                ...state,
                [attr]: filter(state[attr], attr, needle)
            }
        case "ADD_USER":
            return {
                ...state,
                [attr]: appendData(state[attr], attr, payload),
                create: {
                    status: true,
                    data: payload
                }
            }
        case "CLEAR_STATE":
            return {
                ...state,
                [attr]: {
                    defaultState
                }
            }
        case "REMOVE_USER":
            return {
                ...state,
                [attr]: deleteData(state[attr], attr, payload?.userId),
                delete: {
                    ...payload,
                    status: true
                }
            }
        default:
            return state
    }
}

export default fetchReducer;
