import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FlexyWrapper, ModalBox } from "../components";
import { InputWrapper } from "../components/Elements";

import { manageUser, clearState } from "../actions/list";
import { RootStateProps } from "../Interfaces/actions";

export default function ManageUser({ userId = null }: any) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { create: { status = false }, users: { data: { data } } }: any = useSelector<RootStateProps>(state => state?.fetch);
    const { control, getValues, formState, register } = useForm({
        defaultValues: userId ? data.filter(d => d.id === parseInt(userId))[0] : {}
    });

    useEffect(() => {
        if (status) {
            document.getElementById(`modal-close-btn`)?.click();
        }
        return (() => {
            dispatch(clearState("create"));
        });
    }, [status]);

    const onclose = () => {
        navigate("/");
    };

    const onSubmit: any = () => {
        setIsLoading(true);
        dispatch(manageUser(getValues()));
    };

    return (
        <ModalBox title={`${userId ? "Edit" : "Create New"} User`}
            onClose={onclose}
            onSubmit={onSubmit}
            footer={true}
            closeBtn={`Cancel`}
            successBtn={`${userId ? "Update" : "Submit"}`}
            isLoading={isLoading}
        >
            <form>
                <FlexyWrapper gap={32} direction="column">
                    <InputWrapper name="first_name" control={control} addOn={{ label: "First Name", register }} />
                    <InputWrapper name="last_name" control={control} addOn={{ label: "Last Name", register }} />
                    <InputWrapper name="email" control={control} addOn={{ label: "Email", register, type: "email" }} />
                    <InputWrapper name="avatar" control={control} addOn={{ label: "Profile Image Link", register }} />
                </FlexyWrapper>
            </form>
        </ModalBox>
    )
}
