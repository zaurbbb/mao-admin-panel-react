import React, { useEffect } from "react";

import { getUsers } from "../asyncActions/usersAsyncActions";
import { usersSelectors } from "../../../../store/selectors/usersSelectors";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";

import { usersTableHeaderData } from "../consts/usersTableHeaderData";

import SnackbarComponent from "../../../../components/SnackbarComponent/SnackbarComponent";
import Loader from "../../../../loader/Loader";
import TableUserItemComponent from "../../../../components/TableUserItemComponent/TableUserItemComponent";
import TableHeaderComponent from "../../../../components/TableHeaderComponent/TableHeaderComponent";

const UsersListModule = () => {
    const dispatch = useAppDispatch();
    const { usersArr, isFetching, isFetchError } = useAppSelector(usersSelectors);

    useEffect(() => {
        dispatch(getUsers(dispatch));
    }, [dispatch]);

    return (
        <div>
            {isFetchError && <SnackbarComponent />}


            {!isFetching ?
                // userItem = id, email, password, full_name, date_of_birth, region, city, specialization
                usersArr.map((userItem, index) =>
                    <>
                        <TableHeaderComponent data={usersTableHeaderData} />
                        <TableUserItemComponent
                            itemData={userItem}
                            key={index}
                        />
                    </>
                ) : <Loader />
            }

            {/*<button onClick={() => dispatch(setIsSnackbarOpened(true))}>click here</button>*/}

            <SnackbarComponent />
        </div>
    );
};

export default UsersListModule;