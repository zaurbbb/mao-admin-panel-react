import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { convertObjectToFlattenArray } from "../../../helpers/convertObjectToFlattenArray";

import { usersSelectors } from "../../../store/selectors";

import { getuser } from "../asyncActions/userAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import HeaderComponent from "../../../components/HeaderComponent";
import CardComponent from "../../../components/CardComponent";
import Loader from "../../../Loader";
import { getUsers } from "../../ReadUsersModule/asyncActions/usersAsyncActions";

const SingleUserModule = () => {
    const { userId } = useParams();
    const { userItem, isFetching } = useAppSelector(usersSelectors);
    const headerTitle = `user No. ${userId}`;
    const dispatch = useAppDispatch();
    const flatuserItem = convertObjectToFlattenArray(userItem, "userItem");
    console.log("flatuserItem", flatUserItem)

    useEffect(() => {
        dispatch(getUsers(userId));
    }, [dispatch, userId]);

    return (
        <section className="single-user">
            <HeaderComponent
                textValue={headerTitle}
                icon="edit"
                link={"/"}
            />
            {!isFetching ?
                <CardComponent
                    obj={userItem}
                    arr={flatUserItem}
                /> : <Loader />
            }
        </section>
    );
};

export default SingleUserModule;