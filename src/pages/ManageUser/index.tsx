import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FlexyWrapper, ModalBox } from "../../components";
import { Button, InputWrapper, Spinner } from "../../components/Elements";

import { manageUser, clearState } from "../../actions/list";
import { RootStateProps } from "../../Interfaces/actions";

import style from "./style.module.css";

export default function ManageUser({ userId = null }: any) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { create: { status = false }, users: { data: { data } } }: any = useSelector<RootStateProps>(state => state?.fetch);
    const { control, getValues, handleSubmit, register } = useForm({
        defaultValues: userId ? data.filter(d => d.id === parseInt(userId))[0] : {}
    });

    useEffect(() => {
        if (status) {
            handleClose();
        }
        return (() => {
            dispatch(clearState("create"));
        });
    }, [status]);

    const onclose = () => {
        navigate("/");
    };

    const handleClose = () => {
        document.getElementById(`modal-close-btn`)?.click();
    }

    const onSubmit: any = (data) => {
        setIsLoading(true);
        dispatch(manageUser(getValues()));
    };

    return (
        <ModalBox title={`${userId ? "Edit" : "Create New"} User`}
            onClose={onclose}
        >
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <FlexyWrapper gap={32} direction="column">
                    <InputWrapper name="first_name" control={control} addOn={{ label: "First Name", register }} />
                    <InputWrapper name="last_name" control={control} addOn={{ label: "Last Name", register }} />
                    <InputWrapper name="email" control={control} addOn={{ label: "Email", register }} />
                    <InputWrapper name="avatar" control={control} addOn={{ label: "Profile Image Link", register }} />
                </FlexyWrapper>
                <FlexyWrapper gap={4} className={style.footer}>
                    <Button onClick={(e) => { e.preventDefault(); handleClose() }} type="transparent">Cancel</Button>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <FlexyWrapper gap={4}>
                                <Spinner color="#fff" />
                                Submitting...
                            </FlexyWrapper>
                        )}
                        {!isLoading && (userId ? "Update" : "Submit")}
                    </Button>
                </FlexyWrapper>
            </form>
        </ModalBox>
    )
}
