import React, { memo } from "react";

import { convertObjectToFlattenArray } from "../../../helpers/convertObjectToFlattenArray";

import { deleteUser } from "../asyncActions/usersAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";

import { usersTableHeaderData } from "../consts/usersTableHeaderData";

import TableRowComponent from "../../../components/TableRowComponent";

const UsersTable = memo(({ usersList }) => {
    const dispatch = useAppDispatch();

    const deletePostFunction = (id) => {
        return dispatch(deleteUser(id));
    };
    //  userItem = id, email, password, full_name, date_of_birth, region, city, specialization*/}
    return (
        <div className="table">
            <TableRowComponent data={usersTableHeaderData} />
            {usersList.map((userItem, index) => {
                const flattenItem = convertObjectToFlattenArray(userItem, "users");

                return <TableRowComponent
                    key={index}
                    data={flattenItem}
                    onClick={() => deletePostFunction(userItem.id)}
                    icon={"delete"}
                />;
            })}
        </div>
    );
});

export default UsersTable;