import API from "../../../../api";

import { setUsers } from "./registerUserReducer";

export const registerAction = (email, password, fullName, dateOfBirth, region, city, specialization) => {
    return async (dispatch) => {
        try {
        console.log("received");
            const response = await API.post("/users/register", {
                email: email,
                password: password,
                full_name: fullName,
                date_of_birth: dateOfBirth,
                region: region,
                city: city,
                specialization: specialization,
            });
            dispatch(setUsers(response.data));
            console.log("response: ", response);
        } catch (error) {
            console.error("error: ", error);
        }
    };
};