import React, {
    memo,
    useEffect,
    useMemo
} from "react";

import { getUsers } from "../asyncActions/usersAsyncActions";

import { usersSelectors } from "../../../store/selectors";
import { useAppSelector } from "../../../hooks/useAppSelector";

import HeaderComponent from "../../../components/HeaderComponent";
import Loader from "../../../Loader";
import UsersTable from "./UsersTable";

const ReadUsersModule = memo(() => {
    const { usersArr, isFetching } = useAppSelector(usersSelectors);
    const usersList = useMemo(() => usersArr, [usersArr]);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className="users-table">
            <HeaderComponent
                textValue="Users list"
                icon="plus"
                link="/createUser"
            />

            {usersList.length === 0 ?
                <h1>There's no data</h1>
                : !isFetching ?
                    <UsersTable
                        usersList={usersList}
                    /> : <Loader />

            }
        </section>
    );
});

export default ReadUsersModule;