import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ModalBox, WarningBox } from "../../components";

import { RootStateProps } from "../../Interfaces/actions";
import { clearState, deleteUser } from "../../actions/list";

import style from "./style.module.css";

export default function DeleteUser({ userId }: any) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { delete: { status = false } }: any = useSelector<RootStateProps>(state => state?.fetch);

    useEffect(() => {
        if (status) {
            document.getElementById(`modal-close-btn`)?.click();
        }
        return (() => {
            dispatch(clearState("delete"));
        });
    }, [status]);

    const onclose = () => {
        navigate("/");
    };

    const onSubmit: any = () => {
        setIsLoading(true);
        dispatch(deleteUser(userId));
        onclose();
    };

    return (
        <ModalBox title="Delete User"
            footer={true}
            closeBtn={`Close`}
            successBtn={`Delete`}
            onClose={onclose}
            onSubmit={onSubmit}
            className={style.deleteModal}
            isLoading={isLoading}
        >
            <WarningBox
                text="Are you sure want to delete?"
                info="This action is irreversible"
            />
        </ModalBox>
    )
}
