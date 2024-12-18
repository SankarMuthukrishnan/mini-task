import React, { MouseEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { NextIcon, PrevIcon } from "../../Icon";

import { PaginatorProps } from "../../../Interfaces/components";

import style from "./style.module.css";

export default function Paginator({ current, total, attr }: PaginatorProps) {

    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("click", handleClick);
        }
    }, [ref]);

    const handleChange = (val: any) => {
        if (val !== current) {
            navigate(`/page/${val}/`);
        }
    };

    const handleClick: any = ({ target }: MouseEvent) => {
        const ele = target as HTMLButtonElement;
        if (ele?.tagName === "svg") {
            handleChange(ele?.parentElement?.dataset?.value);
        } else {
            handleChange(ele?.dataset?.value);
        }
    }

    if (total === 0)
        return null

    return (
        <div ref={ref} className={style.paginator}>
            <button key={`paginator_prev_btn_${current}_${attr}`} data-value={current - 1} disabled={current === 1}>
                <PrevIcon />
            </button>
            {
                [...Array(total)].map((item, index: number) => {
                    return (
                        <button data-value={index + 1} className={current === (index + 1) ? style.active : ""} key={`paginator_button_${index}_${attr}`}>{index + 1}</button>
                    )
                })
            }
            <button key={`paginator_next_btn_${current}_${attr}`} data-value={current + 1} disabled={current === total}>
                <NextIcon />
            </button>
        </div>
    )
}
