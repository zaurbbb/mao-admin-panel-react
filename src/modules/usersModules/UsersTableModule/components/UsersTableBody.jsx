import React, { memo } from "react";

import { transformObjectToArrayValues } from "../helpers/transformObjectToArrayValues";

import { deleteUser } from "../asyncActions/usersAsyncActions";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";

import TableRowComponent from "../../../../components/TableRowComponent";
import DeleteIconUI from "../../../../ui/icons/DeleteIconUI";

const UsersTableBody = memo(({ usersList }) => {
    const dispatch = useAppDispatch();

    const deleteUserFunction = (id) => {
        console.log("deleteUserFunction", id);
        return dispatch(deleteUser(id));
    };

    return usersList
        // userItem = id, email, password, full_name, date_of_birth, region, city, specialization*/}
        .map((userItem, index) => {

        const itemDataKeys = Object.keys(userItem);
        const userData = transformObjectToArrayValues(itemDataKeys, userItem);

        return <TableRowComponent
            key={index}
            data={userData}
            onClick={() => deleteUserFunction(userItem.id)}
            icon={<DeleteIconUI />}
        />;
    });
});

export default UsersTableBody;