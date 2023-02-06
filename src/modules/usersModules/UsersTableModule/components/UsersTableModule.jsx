import React, {
    memo,
    useEffect,
    useMemo
} from "react";

import { getUsers } from "../asyncActions/usersAsyncActions";

import { usersSelectors } from "../../../../store/selectors/usersSelectors";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";

import { usersTableHeaderData } from "../consts/usersTableHeaderData";

import HeaderComponent from "../../../../components/HeaderComponent";
import Loader from "../../../../loader/Loader";
import UsersTableBody from "./UsersTableBody";
import TableRowComponent from "../../../../components/TableRowComponent";

const UsersTableModule = memo(() => {
    const dispatch = useAppDispatch();
    const { usersArr, isFetching } = useAppSelector(usersSelectors);
    const usersList = useMemo(() => usersArr, [usersArr]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <section className="usersTable">
            <HeaderComponent
                textValue="Users Page"
                icon="plus"
                link="/registerUser"
            />

            {usersList.length === 0 ?
                <h1>There's no data</h1>
                :
                <div className="table">
                    <TableRowComponent
                        data={usersTableHeaderData}
                    />
                    {!isFetching ?
                        <UsersTableBody
                            usersList={usersList}
                        /> : <Loader />
                    }
                </div>
            }

        </section>
    );
});

export default UsersTableModule;