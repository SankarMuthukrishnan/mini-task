import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../Elements";
import { HeaderWrapperProps } from "../../Interfaces/components";
import { FlexyWrapper, HeaderWrapper, Section } from "../Wrappers";

import { SignOutIcon } from "../Icon";

import { logout } from "../../actions/auth";

export default function Header(props: HeaderWrapperProps) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        document.cookie = `token=;Max-Age=-1; path=/`;
        dispatch(logout());
        navigate("/login");
    };

    return (
        <HeaderWrapper>
            <Section>
                <FlexyWrapper gap={12}>
                    Elon Musk
                    <Button type="danger" onClick={handleLogout}>
                        <SignOutIcon />
                    </Button>
                </FlexyWrapper>
            </Section>
        </HeaderWrapper>
    )
}
