import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Title } from "../../Typos";
import WarningBox from "../WarningBox";

import { DeleteIcon, EditIcon } from "../../Icon";

import { UserDataProps } from "../../../Interfaces/components";

import style from "./style.module.css";

export default function UserCards({ list }: UserDataProps) {
    return (
        <Fragment>
            <div className={style.wrapper}>
                {
                    list && list.length > 0 && list.map((item) => {
                        return (
                            <div className={`${style.card}`} key={`user_card_${item?.id}`}>
                                <div className={style.box}>
                                    <div className={style.dp}>
                                        <img loading="lazy" src={item?.avatar} alt={item?.first_name} />
                                    </div>
                                    <Title className={style.title}>{item?.first_name} {item?.last_name}</Title>
                                    <p className={style.email}>{item?.email}</p>
                                    <div className={style.overlay}>
                                        <Link to={`/edit-user/${item?.id}/`} className={style.edit} title={`Edit ${item?.first_name}`} aria-label={`Edit ${item?.first_name}`}>
                                            <EditIcon />
                                        </Link>
                                        <Link to={`/delete-user/${item?.id}/`} className={style.delete} title={`Delete ${item?.first_name}`} aria-label={`Delete ${item?.first_name}`}>
                                            <DeleteIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    list.length === 0 && (
                        <WarningBox text="No user found"/>
                    )
                }
            </div>
        </Fragment>
    )
}

