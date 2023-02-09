import React, {
    useEffect,
    useMemo
} from "react";

import { postsSelectors } from "../../../store/selectors";
import { getPosts } from "../asyncActions/postsAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import HeaderComponent from "../../../components/HeaderComponent";
import Loader from "../../../Loader";
import PostsTable from "./PostsTable";

const ReadPostsModule = () => {
    const dispatch = useAppDispatch();
    const { postsArr, isFetching } = useAppSelector(postsSelectors);
    const postsList = useMemo(() => postsArr, [postsArr]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <section className="posts-table">
            <HeaderComponent
                textValue="Posts List"
                icon="plus"
                link="/createPost"
            />

            {postsList.length === 0 ?
                <HeaderComponent textValue="There's no data" />
                : !isFetching ?
                    <PostsTable postsList={postsList} />
                    : <Loader />

            }

        </section>
    );
};

export default ReadPostsModule;