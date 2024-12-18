import { stateProps as rootAuthProps } from "../reducers/auth"
import { stateProps as rootFetchProps } from "../reducers/fetch"

export interface RootStateProps {
    auth: rootAuthProps,
    fetch: rootFetchProps
}

export type loadingtypes = "idle" | "pending" | "fulfilled" | "rejected";

export interface FetchProps {
    attr: string,
    page?: number
}

export interface UserListProps {
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

export interface ListProps {
    data: Array<UserListProps>,
    page: number,
    per_page: number,
    total: number,
    total_pages: number
}
