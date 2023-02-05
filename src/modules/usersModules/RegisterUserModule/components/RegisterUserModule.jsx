import React, { useState } from "react";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";

import API from "../../../../api/index";
import { useInput } from "../../../../hooks/useInput";

const RegisterUserModule = () => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();

    // const email = useInput("");
    // const password = useInput("");
    // const fullName = useInput("");
    // const dateOfBirth = useInput("");
    // const region = useInput("");
    // const city = useInput("");
    // const specialization = useInput("");
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // dispatch(registerUser(email, password, fullName, dateOfBirth, region, city, specialization));
    // };

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


    const handleSubmit = async (e) => {
        // console.log("button clicked");
        e.preventDefault();
        return await API.post("/users/register", {
            email,
            password,
            full_name: fullName,
            date_of_birth: dateOfBirth,
            region,
            city,
            specialization
        }).then(() => {
            // navigate("/manageUsers");
            console.log("user added successfully");
        }).catch(err => {
            // const fullErrorMessage = err.response.data;
            // if (fullErrorMessage === "Missing username, email or password") {
            //     // setError("create-error-missing-field");
            // } else if (fullErrorMessage === "User already exists") {
            //     // setError("create-error-user-already-exists");
            // } else {
            // }
                console.log(err);
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                value={email}
                onChange={handleEmail}
                type="text"
            />
            <input
                value={password}
                onChange={handlePassword}
                type="password"
            />
            <input
                value={fullName}
                onChange={handleFullName}
                type="text"
            />
            <input
                value={dateOfBirth}
                onChange={handleDateOfBirth}
                type="text"
            />
            <input
                value={region}
                onChange={handleRegion}
                type="text"
            />
            <input
                value={city}
                onChange={handleCity}
                type="text"
            />
            <input
                value={specialization}
                onChange={handleSpecialization}
                type="text"
            />
            <input
                type="submit" value={"create"}/>
        </form>
    );
};

export default RegisterUserModule;