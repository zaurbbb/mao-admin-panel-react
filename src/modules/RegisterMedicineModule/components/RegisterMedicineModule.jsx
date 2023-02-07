import React from "react";

import HeaderComponent from "../../../components/HeaderComponent";
import RegisterMedicineForm from "./RegisterMedicineForm";

const RegisterMedicineModule = () => {
    return (
        <section className="register-medicine">
            <HeaderComponent textValue="Create Medicine" />
            <RegisterMedicineForm />
        </section>
    );
};

export default RegisterMedicineModule;