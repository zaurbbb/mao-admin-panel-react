import React from "react";

import HeaderComponent from "../../../components/HeaderComponent";
import CreatePostForm from "./CreatePostForm";

const CreatePostModule = () => {
    return (
        <section className="create-post">
            <HeaderComponent textValue="Create Post" />
            <CreatePostForm />
        </section>
    );
};

export default CreatePostModule;