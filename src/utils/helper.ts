import { FlexyWrapperProps } from "../Interfaces/components";
import { ButtonProps } from "../Interfaces/elements";

export const buttonBg = ({ type = "primary" }: ButtonProps) => {

    if (type === "danger")
        return "var(--secondary-color)";

    if (type === "primary")
        return "var(--primary-color)";

    return "#0000";
}

export const flexyCss = ({ direction = "row", gap }: FlexyWrapperProps) => {
    if (gap === -1)
        return "space-between";
    return direction === "row" ? "flex-start" : "center";
}

export const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts: any = value.split(`; ${name}=`);
    if (parts.length === 2)
        return parts.pop().split(';').shift();
    return null;
}

export const filter = (state, attr, needle = "") => {
    let data = state?.data?.original;
    if (needle !== "" && attr === "users") {
        data = data.filter(({ email, first_name, last_name }) =>
            email.toLocaleLowerCase().startsWith(needle) ||
            first_name.toLocaleLowerCase().startsWith(needle) ||
            last_name.toLocaleLowerCase().startsWith(needle)
        );
    }

    return {
        ...state,
        data: {
            ...state?.data,
            data
        }
    };
}

export const appendData = (state, attr, haystack = { id: null }) => {

    let data = state?.data?.original;

    if (haystack && attr === "users") {
        if (haystack?.id) {
            data = data.map((item) => {
                if (item?.id === haystack?.id) {
                    return haystack;
                }
                return item
            });
        } else {
            data.push({ ...haystack, id: data[data.length - 1].id + 1 });
        }
    }

    return {
        ...state,
        data: {
            ...state?.data,
            data,
            original: data
        }
    };
}

export const deleteData = (state, attr, userId = null) => {
    let data = state?.data?.original;

    if (userId && attr === "users") {
        data.splice(data.findIndex(d => d.id === parseInt(userId)), 1);
    }

    return {
        ...state,
        data: {
            ...state?.data,
            data,
            original: data
        }
    }
}
