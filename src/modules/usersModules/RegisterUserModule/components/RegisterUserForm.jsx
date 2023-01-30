import React from "react";
import { useNavigate } from "react-router-dom";

import { useInput } from "../../../../hooks/useInput";
import { registerAction } from "../store/registerUserActions";

const RegisterUserForm = () => {
    // const navigate = useNavigate();
    const email = useInput("");
    const password = useInput("");
    const fullName = useInput("");
    const dateOfBirth = useInput("");
    const region = useInput("");
    const city = useInput("");
    const specialization = useInput("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("email: ", email.value);
    //     // return () => ;
    // };

    return (
        <
            // onSubmit={handleSubmit}
        >
            <input
                {...email}
                type="text"
            />
            <input
                {...password}
                type="password"
            />
            <input
                {...fullName}
                type="text"
            />
            <input
                {...dateOfBirth}
                type="text"
            />
            <input
                {...region}
                type="text"
            />
            <input
                {...city}
                type="text"
            />
            <input
                {...specialization}
                type="text"
            />
            <button onClick={() => registerAction(email, password, fullName, dateOfBirth, region, city, specialization)}>
                create
            </button>
        </>
    );
};

export default RegisterUserForm;