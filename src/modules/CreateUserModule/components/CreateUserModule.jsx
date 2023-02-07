import React from "react";

import HeaderComponent from "../../../components/HeaderComponent";
import CreateUserForm from "./CreateUserForm";

const CreateUserModule = () => {
    return (
        <section className="create-user">
            <HeaderComponent textValue="Create User" />
            <CreateUserForm />
        </section>
    );
};

export default CreateUserModule;