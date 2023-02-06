import React, { useState } from "react";
import FormElementComponent from "../../../../components/FormElementComponent";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { registerUser } from "../asyncActions/registerAsyncActions";

const RegisterUserForm = () => {
    const formClassName = "form";
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [specialization, setSpecialization] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
    }

    const handleRegion = (e) => {
        setRegion(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleSpecialization = (e) => {
        setSpecialization(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(email, password, fullName, dateOfBirth, region, city, specialization));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={formClassName}
        >
            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Email"
                inputType="email"
                inputValue={email}
                inputOnChange={handleEmail}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Password"
                inputType="password"
                inputValue={password}
                inputOnChange={handlePassword}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Full name"
                inputType="text"
                inputValue={fullName}
                inputOnChange={handleFullName}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Date of birth"
                inputType="date"
                inputValue={dateOfBirth}
                inputOnChange={handleDateOfBirth}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Region"
                inputType="text"
                inputValue={region}
                inputOnChange={handleRegion}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="City"
                inputType="text"
                inputValue={city}
                inputOnChange={handleCity}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Specialization"
                inputType="text"
                inputValue={specialization}
                inputOnChange={handleSpecialization}
            />

            <FormElementComponent
                elementClassName={formClassName}
                inputType={"submit"}
                inputValue={"Сreate new user"}
            />
        </form>
    );
};

export default RegisterUserForm;