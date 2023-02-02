import React, { useEffect } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";

import { getUsers } from "../store/usersActions";
import Loader from "../../../../loader/Loader";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const isFetching = useSelector(state => state.users.isFetching);
    const isFetchError = useSelector(state => state.users.isFetchError);

    // createPages(pages, pagesCount, currentPage);
    //
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    console.log("users", users);
    // function searchHandler() {
    //     dispatch(setCurrentPage(1))
    //     dispatch(getUsers(searchValue, currentPage, perPage))
    // }

    return (
        <div>
            {isFetchError &&
                <div
                    className="alert alert-danger"
                    role="alert"
                >
                    We've caught an error! Please, come back later
                </div>
            }
            {/*<div className="search">*/}
            {/*    <input*/}
            {/*        value={searchValue}*/}
            {/*        onChange={(e) => setSearchValue(e.target.value)}*/}
            {/*        type="text"*/}
            {/*        placeholder="Input repo name"*/}
            {/*        className="search-input"*/}
            {/*    />*/}
            {/*    <button*/}
            {/*        onClick={() => searchHandler()}*/}
            {/*        className="search-btn"*/}
            {/*    >Search*/}
            {/*    </button>*/}
            {/*</div>*/}

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

        </div>
    );
};

export default UsersList;