import React, { useState } from "react";

import { createPost } from "../asyncActions/createAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import FormElementComponent from "../../../components/FormElementComponent";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { postsSelectors } from "../../../store/selectors";

const CreatePostForm = () => {
    const formTagClassName = `form form--create-post`;
    const { postsArr } = useAppSelector(postsSelectors);
    const theLastElemId = postsArr.length > 0 ? postsArr[postsArr.length - 1].id + 1 : 1;
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleTitle = event => {
        setTitle(event.target.value);
    }

    const handleText = event => {
        setText(event.target.value);
    }

    const handleAuthor = event => {
        setAuthor(event.target.value);
    }

    const handleImageURL = event => {
        setImageURL(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createPost( title, text, author, imageURL ));
    }
    return (
        <form
            onSubmit={handleSubmit}
            className={formTagClassName}
        >
            <FormElementComponent
                labelTextValue={"Title"}
                inputType={"text"}
                inputValue={title}
                inputOnChange={handleTitle}
            />

            <FormElementComponent
                labelTextValue={"Content"}
                textareaValue={text}
                textareaOnChange={handleText}
            />

            <FormElementComponent
                labelTextValue={"Author"}
                inputType={"text"}
                inputValue={author}
                inputOnChange={handleAuthor}
            />

            <FormElementComponent
                labelTextValue={"Image URL"}
                inputType={"text"}
                inputValue={imageURL}
                inputOnChange={handleImageURL}
            />

            <FormElementComponent
                inputType={"submit"}
                inputClassName={"form__submit"}
                inputValue={"Create a post"}
            />
        </form>
    );
};

export default CreatePostForm;