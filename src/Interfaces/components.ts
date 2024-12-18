import { ReactNode } from "react";
import { UserListProps } from "./actions";

export interface CardProps {
    boxtype?: string
}

export interface FlexyWrapperProps {
    gap: number
    direction?: "row" | "column"
}

export interface HeaderWrapperProps {

}

export interface TabProps {
    children: ReactNode
    setState: any
    state: string
}

export interface UserDataProps {
    list: Array<UserListProps>
}

export interface PaginatorProps {
    attr: string
    callback: Function
    current: number
    total: number
}

export interface SearchBoxProps {
    attr: string
}

export interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    children: ReactNode
    footer?: boolean
    successBtn?: string | null
    closeBtn?: string | null
    className?: string | null
    isLoading?: boolean
}

export interface ModalWrapperProps {
    tag?: string;
    children: React.ReactNode;
    className?: string;
}

export interface WarningBoxProps{
    text: string
    info?: string
}
