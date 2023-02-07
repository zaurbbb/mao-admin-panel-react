import React, { memo } from "react";

import { transformUserObjectToArray } from "../helpers/transformUserObjectToArray";

import { deleteUser } from "../asyncActions/usersAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";

import { usersTableHeaderData } from "../consts/usersTableHeaderData";

import TableRowComponent from "../../../components/TableRowComponent";

const UsersTable = memo(({ usersList }) => {
    const dispatch = useAppDispatch();

    const deleteUserFunction = (id) => {
        console.log("deleteUserFunction", id);
        return dispatch(deleteUser(id));
    };
    //  userItem = id, email, password, full_name, date_of_birth, region, city, specialization*/}
    return (
        <div className="table">
            <TableRowComponent
                data={usersTableHeaderData}
            />
            {usersList.map((userItem, index) => {
                const itemDataKeys = Object.keys(userItem);
                const userData = transformUserObjectToArray(itemDataKeys, userItem);

                return <TableRowComponent
                    key={index}
                    data={userData}
                    onClick={() => deleteUserFunction(userItem.id)}
                    icon={"delete"}
                />;
            })}
        </div>
    );
});

export default UsersTable;