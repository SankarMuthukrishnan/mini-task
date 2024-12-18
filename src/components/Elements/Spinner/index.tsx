import React from "react";

import { SpinnerProps } from "../../../Interfaces/elements";

import style from "./style.module.css";

const getSize = (size: string) => {

    if (size === "large")
        return { width: 36, height: 36 };

    return { width: 20, height: 20 };
}

export default function Spinner({ size = "medium", color = "var(--spinner-bg)" }: SpinnerProps) {
    return (
        <div className={`${style.spinner}`} style={{ ...getSize(size) }}>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
        </div>
    );
}
