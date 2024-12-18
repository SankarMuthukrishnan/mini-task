import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Elements";
import WarningBox from "./WarningBox";
import { FlexyWrapper, TableWrapper } from "../Wrappers";

import { UserDataProps } from "../../Interfaces/components";

export default function UserTable({ list = [] }: UserDataProps) {
    return (
        <Fragment>
            <TableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list && list.length > 0 && list.map((item, index: number) => {
                                return (
                                    <tr key={`user_table_row_${index}_${item?.id}`}>
                                        <td>
                                            <img loading="lazy" src={item?.avatar} alt={item?.first_name} />
                                        </td>
                                        <td>
                                            <Link title="click here to send email" to={`mailto:${item?.email}`}>{item?.email}</Link>
                                        </td>
                                        <td>{item?.first_name}</td>
                                        <td>{item?.last_name}</td>
                                        <td>
                                            <FlexyWrapper gap={12}>
                                                <Button>
                                                    <Link to={`/edit-user/${item?.id}/`}>Edit</Link>
                                                </Button>
                                                <Button type="danger">
                                                    <Link to={`/delete-user/${item?.id}/`}>Delete</Link>
                                                </Button>
                                            </FlexyWrapper>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            list && list.length === 0 && (
                                <tr>
                                    <td colSpan={5}>
                                        <WarningBox text="No user found"/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </TableWrapper>
        </Fragment>
    )
}
