import React from "react";

import { InputProps } from "../../../Interfaces/elements";
import { FieldWrapper, FlexyWrapper } from "../../Wrappers";

import style from "./style.module.css";

const options = ({ required = true, name }: any) => {
    let data = {};
    if (required) {
        data["required"] = `${name} is required`;
    }
    if (name === "email") {
        data["pattern"] = {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address'
        };
    }

    return data;
}

export default function Input(props: InputProps) {

    const { name, required = true, value, type = "text", error, onChange, icon: Icon = null, className = "", label = null, register } = props;

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <FlexyWrapper gap={4} direction="column" className={style.wrap}>
            {
                label && <label className={style.label} htmlFor={name}>
                    {required && <span>*</span>}
                    {label}
                </label>
            }
            <FieldWrapper className={className}>
                {
                    Icon && (<div className={style.icon}>
                        <Icon />
                    </div>)
                }
                <input
                    {...register(name, options(props))}
                    id={name}
                    type={type}
                    defaultValue={value}
                    onChange={handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </FieldWrapper>
        </FlexyWrapper>
    )
}
