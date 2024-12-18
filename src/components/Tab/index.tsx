import React, { useEffect, useRef } from "react";

import { TabProps } from "../../Interfaces/components";

import style from "./style.module.css";

export default function Tab({ setState, state, children }: TabProps) {

    const tabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ele = tabRef.current;
        if (ele) {
            ele.addEventListener("click", handleClick);
        }
        return (() => {
            if (ele) {
                ele.removeEventListener("click", handleClick);
            }
        })
    }, [tabRef]);

    useEffect(() => {
        if (tabRef.current) {
            tabRef.current.querySelectorAll("button").forEach(ele => {
                if (ele && state && (ele?.dataset?.value === state)) {
                    if (ele.previousElementSibling) {
                        ele.previousElementSibling?.classList.add(style.previous);
                    }
                    ele?.classList.add(style.active);
                } else {
                    ele.classList.remove(style.active);
                    ele.classList.remove(style.previous);
                }
            })
        }
    }, [state, tabRef]);

    const handleClick = ({ target }: MouseEvent) => {
        const ele = target as HTMLButtonElement;
        if (ele && ele?.dataset?.value && state !== setState) {
            setState(ele?.dataset?.value);
        }
    }

    return (
        <div className={`${style.tabWrapper}`}>
            <div ref={tabRef} className={`${style.tabBox}`}>
                {children}
            </div>
        </div>
    )
}
