import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../../../store/actions/usersActions";
import { snackbarSelectors } from "../../../../store/selectors/snackbarSelectors";
import { usersSelectors } from "../../../../store/selectors/usersSelectors";

import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";

import Loader from "../../../../loader/Loader";
import SnackbarComponent from "../../../../components/SnackbarComponent/SnackbarComponent";

const UsersList = () => {
    const dispatch = useAppDispatch();
    const isSnackbarOpened = useAppSelector(snackbarSelectors);

    const { users, isFetching, isFetchError } = useAppSelector(usersSelectors);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    console.log(isSnackbarOpened);

    return (
        <div>
            {isFetchError && <SnackbarComponent />}
            {/*<div className="pages">*/}
            {/*    {pages.map((page, index) =>*/}
            {/*        <span*/}
            {/*            key={index}*/}
            {/*            className={currentPage === page ? "page active" : "page"}*/}
            {/*            onClick={() => dispatch(setCurrentPage(page))}*/}
            {/*            style={{marginRight: "10px"}}*/}
            {/*        >*/}
            {/*            {page}*/}
            {/*        </span>)}*/}
            {/*</div>*/}

            {
                !isFetching ?
                    users.map((userItem, index) =>
                        <>
                            {userItem.full_name} /
                            {userItem.specialization}
                        </>
                    )
                    :
                    <Loader />
            }
            {isSnackbarOpened && <SnackbarComponent />}
        </div>
    );
};

export default connect(null, null)(UsersList);