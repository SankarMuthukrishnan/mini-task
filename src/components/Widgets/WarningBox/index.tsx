import React from "react";

import { WarningIcon } from "../../Icon";
import { WarningBoxProps } from "../../../Interfaces/components";

import style from "./style.module.css";
import { Title } from "../../Typos";

export default function WarningBox({ text, info = "" }: WarningBoxProps) {
    return (
        <div className={style.warnBox}>
            <div className={style.icon}>
                <WarningIcon />
            </div>
            <Title className={style.msg}>{text}</Title>
            { info !== "" && <p className={style.info}>{info}</p> }
        </div>
    )
}
