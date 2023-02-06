import React from "react";

import HeaderComponent from "../../../../components/HeaderComponent";
import RegisterUserForm from "./RegisterUserForm";

const RegisterUserModule = () => {
    return (
        <section className="registerUser">
            <HeaderComponent textValue="Create User" />
            <RegisterUserForm />
        </section>
    );
};

export default RegisterUserModule;