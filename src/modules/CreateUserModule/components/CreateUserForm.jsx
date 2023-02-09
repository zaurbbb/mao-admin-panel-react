import React, { useState } from "react";
import FormElementComponent from "../../../components/FormElementComponent";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { createUser } from "../asyncActions/createAsyncActions";

const CreateUserForm = () => {
    const formTagClassName = `form form--create-user`;
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [specialization, setSpecialization] = useState("");

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleFullName = event => {
        setFullName(event.target.value);
    }

    const handleDateOfBirth = event => {
        setDateOfBirth(event.target.value);
    }

    const handleRegion = event => {
        setRegion(event.target.value);
    }

    const handleCity = event => {
        setCity(event.target.value);
    }

    const handleSpecialization = event => {
        setSpecialization(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createUser(email, password, fullName, dateOfBirth, region, city, specialization));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={formTagClassName}
        >
            <FormElementComponent
                labelTextValue="Email"
                inputType="email"
                inputValue={email}
                inputOnChange={handleEmail}
            />

            <FormElementComponent
                labelTextValue="Password"
                inputType="password"
                inputValue={password}
                inputOnChange={handlePassword}
            />

            <FormElementComponent
                labelTextValue="Full name"
                inputType="text"
                inputValue={fullName}
                inputOnChange={handleFullName}
            />

            <FormElementComponent
                labelTextValue="Date of birth"
                inputType="date"
                inputValue={dateOfBirth}
                inputOnChange={handleDateOfBirth}
            />

            <FormElementComponent
                labelTextValue="Region"
                inputType="text"
                inputValue={region}
                inputOnChange={handleRegion}
            />

            <FormElementComponent
                labelTextValue="City"
                inputType="text"
                inputValue={city}
                inputOnChange={handleCity}
            />

            <FormElementComponent
                labelTextValue="Specialization"
                inputType="text"
                inputValue={specialization}
                inputOnChange={handleSpecialization}
            />

            <FormElementComponent
                inputType={"submit"}
                inputValue={"Сreate new user"}
            />
        </form>
    );
};

export default CreateUserForm;