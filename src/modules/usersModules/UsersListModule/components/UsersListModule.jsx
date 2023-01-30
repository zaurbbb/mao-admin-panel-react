import React from "react";
import { Provider } from "react-redux";

import { usersStore } from "../store/configureUsersStore";

import UsersList from "./UsersList";

const UsersListModule = () => {

    return (
        <Provider store={usersStore}>
            <UsersList />
        </Provider>
    );
};

export default UsersListModule;