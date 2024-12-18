import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header";
import { Section } from "../Wrappers";
import { getCookie } from "../../utils/helper";

export default function PrivateLayout() {

    const [token] = useState<string>(getCookie("token"));
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(`/login`);
        }
    }, [token]);

    if (!token)
        return null;

    return (
        <Fragment>
            <Header />
            <div className="body">
                <Section>
                    <Outlet />
                </Section>
            </div>
        </Fragment>
    )
}
