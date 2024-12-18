import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../Elements";
import { SearchBoxProps } from "../../../Interfaces/components";

import { search } from "../../../actions/list";
import { ClearIcon, SearchIcon } from "../../Icon";

import style from "./style.module.css";

export default function SearchBox({ attr }: SearchBoxProps) {

    const [value, setValue] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search({ attr: "users", needle: value.toLocaleLowerCase() }));
    }, [value]);

    const handleChange: any = (e) => {
        if (value !== e?.target?.value) {
            setValue(e?.target?.value);
        }
    }

    const handleClear = () => {
        setValue("");
    }

    return (
        <div className={style.box}>
            <div className={style.inputWrapper}>
                <input value={value} className={style.input} name="search" onChange={handleChange} />
                {
                    value && <button onClick={handleClear} className={style.clearIcon} title="Clear Search" aria-label="click here to clear searchbox">
                        <ClearIcon />
                    </button>
                }
            </div>
            <Button type="transparent" className={style.icon}>
                <SearchIcon />
            </Button>
        </div>
    )
}