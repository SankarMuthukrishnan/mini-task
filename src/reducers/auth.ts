import { Reducer } from "redux"
import { loadingtypes } from "../Interfaces/actions"

export interface defaultStateProps {
    loading: loadingtypes
    data?: null
    error?: any
}

export interface stateProps {
    login: defaultStateProps
}

const defaultState: defaultStateProps = {
    loading: "idle",
    data: null,
    error: null
}

const initialState: stateProps = {
    login: defaultState
}

const authReducer: Reducer<stateProps, any> = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_PENDING":
            return {
                ...state,
                login: {
                    ...defaultState,
                    loading: "pending"
                }
            }
        case "LOGIN_FULFILLED":
            return {
                ...state,
                login: {
                    ...defaultState,
                    data: action?.payload?.response?.data,
                    loading: "fulfilled"
                }
            }
        case "LOGIN_REJECTED":
            return {
                ...state,
                login: {
                    ...defaultState,
                    loading: "rejected",
                    error: {
                        status: action?.payload?.response?.status,
                        data: action?.payload?.response?.data
                    }
                }
            }
        case "logout":
            return {
                ...state,
                login: defaultState
            }
        default:
            return state;
    }
}

export default authReducer;
