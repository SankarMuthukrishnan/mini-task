import { Fragment, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, InputWrapper, Spinner } from "../components/Elements";
import { FieldWrapper, FlexyWrapper, Wrapper } from "../components";

import { LockIcon, UserIcon } from "../components/Icon";

import { login } from "../actions/auth";
import { RootStateProps } from "../Interfaces/actions";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, data }: any = useSelector<RootStateProps>(state => state?.auth?.login);
    const [loginError, setLoginError] = useState({});

    useEffect(() => {
        if (loading === "fulfilled" && data?.token) {
            const { remember } = getValues();
            let expiry: any = new Date(Date.now() + 10 * 365 * 24 * 60 * 60);
            if (remember) {
                expiry = new Date(expiry * 1000);
            }
            document.cookie = `token=${data?.token};expires=${expiry.toUTCString()};path=/`;
            navigate('/');
        } else if (loading === "rejected") {
            setLoginError({ message: "Incorrect username or password." });
        }
    }, [loading, data]);

    const { handleSubmit, control, register, getValues } = useForm({
        defaultValues: { email: "eve.holt@reqres.in", password: "cityslicka", remember: true }
    });

    const onSubmit = (data) => {
        setLoginError({});
        dispatch(login(data));
    }

    return (
        <div className="login-wrapper">
            <Wrapper boxtype="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FlexyWrapper gap={32} direction="column">
                        <InputWrapper name="email" control={control} addOn={{ icon: UserIcon, register, type: "text" }} />
                        <InputWrapper name="password" control={control} addOn={{ icon: LockIcon, register, type: "password" }} loginError={loginError} />
                        <FlexyWrapper gap={8}>
                            <input {...register("remember")} type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </FlexyWrapper>
                        <FieldWrapper>
                            <Button disabled={loading === "pending"}>
                                {loading === "idle" && "Log in"}
                                {loading === "pending" && (
                                    <Fragment>
                                        <Spinner color="#fff" />
                                    </Fragment>
                                )}
                                {
                                    loading === "rejected" && "Try Again"
                                }
                            </Button>
                        </FieldWrapper>
                    </FlexyWrapper>
                </form>
            </Wrapper>
        </div>
    )
}
