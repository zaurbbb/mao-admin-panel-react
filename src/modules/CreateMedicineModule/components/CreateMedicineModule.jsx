import React from "react";

import HeaderComponent from "../../../components/HeaderComponent";
import CreateMedicineForm from "./CreateMedicineForm";

const CreateMedicineModule = () => {
    return (
        <section className="create-medicine">
            <HeaderComponent textValue="Create Medicine" />
            <CreateMedicineForm />
        </section>
    );
};

export default CreateMedicineModule;