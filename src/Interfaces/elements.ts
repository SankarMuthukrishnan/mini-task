import { IconType } from "react-icons";

export interface ButtonProps {
    disabled?: boolean,
    type?: "primary" | "danger" | "transparent",
}

export interface SpinnerProps {
    color?: string
    size?: "small" | "medium" | "large",
}

export interface InputProps {
    className?: string
    error?: any
    icon?: IconType | null
    label?: string | null
    name: string
    pattern?: string | undefined
    required?: boolean
    type?: string
    value?: string
    onChange: any
    register: any
}