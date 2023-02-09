import React from "react";

import { deletePost } from "../asyncActions/postsAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";

import TableRowComponent from "../../../components/TableRowComponent";
import { postsTableHeaderData } from "../consts/postsTableHeaderData";
import { convertObjectToFlattenArray } from "../../../helpers/convertObjectToFlattenArray";

const PostsTable = ({ postsList }) => {
    const dispatch = useAppDispatch();
    console.log("PostsTable -> postsList", postsList);

    function deletePostFunction(id) {
        dispatch(deletePost(id));
    }
    return (
        <div className="table">
            <TableRowComponent data={postsTableHeaderData}/>
            {postsList.map((postItem, index) => {
                const flattenItem = convertObjectToFlattenArray(postItem, "posts");

                return <TableRowComponent
                    key={index}
                    data={flattenItem}
                    onClick={() => deletePostFunction(postItem.id)}
                    icon={"delete"}
                    link={"/posts"}
                />;
            })}
        </div>
    );
};

export default PostsTable;