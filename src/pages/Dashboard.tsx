import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ManageUser from "./ManageUser";
import DeleteUser from "./DeleteUser";
import { Title } from "../components/Typos";
import { Button, Spinner } from "../components/Elements";
import { FlexyWrapper, Paginator, SearchBox, Tab, UserCards, UserTable, Wrapper } from "../components";

import { ListIcon, TableIcon } from "../components/Icon";

import { fetch } from "../actions/list";
import { RootStateProps } from "../Interfaces/actions";


export default function Dashboard() {

    const { action = "", userId = null, pageCount = (localStorage.getItem("pageCount") || "1") } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState<any>(localStorage.getItem("view") || "table");
    const dispatch = useDispatch();
    const { loading, data: { data = [], page = 0, total_pages = 0, per_page = 6 } = {} }: any = useSelector<RootStateProps>(state => state?.fetch?.users || {});

    useEffect(() => {
        if (action) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [action]);

    useEffect(() => {
        localStorage.setItem("view", tab);
    }, [tab]);

    useEffect(() => {
        handleFetch();
        localStorage.setItem("pageCount", pageCount);
    }, [pageCount]);

    const handleFetch = (page = pageCount) => {
        dispatch(fetch({ attr: "users", page }));
    }

    return (
        <Fragment>
            <Wrapper>
                <FlexyWrapper className="user-card-header" gap={-1}>
                    <Title>Users</Title>
                    <div className="card-action-bar">
                        <SearchBox attr="users" />
                        <Button onClick={() => { navigate("/create-user") }}>Create User</Button>
                    </div>
                </FlexyWrapper>
                <Tab setState={setTab} state={tab}>
                    <button data-value="table">
                        <TableIcon /> Table
                    </button>
                    <button data-value="card">
                        <ListIcon /> Card
                    </button>
                </Tab>
                {
                    ["idle", "pending"].includes(loading) && <Fragment>
                        <Spinner />
                    </Fragment>
                }
                {
                    loading === "fulfilled" && (data?.length || []) && (
                        <Fragment>
                            {tab === "table" && <UserTable list={data} />}
                            {tab === "card" && <UserCards list={data} />}
                        </Fragment>
                    )
                }
            </Wrapper>
            {
                loading === "fulfilled" && data && (data?.length > 0) && (
                    <Fragment>
                        <Paginator attr="users" callback={handleFetch} current={page} total={data?.length < per_page ? 1 : total_pages} />
                    </Fragment>
                )
            }
            {
                loading === "fulfilled" && (["create-user", "edit-user"].includes(action)) && (
                    <ManageUser userId={userId} />
                )
            }
            {
                loading === "fulfilled" && (["delete-user"].includes(action)) && (
                    <DeleteUser userId={userId} />
                )
            }
        </Fragment>
    )
}
