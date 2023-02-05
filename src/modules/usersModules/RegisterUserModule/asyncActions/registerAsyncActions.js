import API from "../../../../api";

import { setUsers } from "../../../../store/actions/usersActions";

export const registerUser = (email, password, fullName, dateOfBirth, region, city, specialization) => {
    return async (dispatch) => {
        try {
            const response = await API.post("/users/register", {
                email: email,
                password: password,
                full_name: fullName,
                date_of_birth: dateOfBirth,
                region: region,
                city: city,
                specialization: specialization,
            });
            console.log("got here");
            dispatch(setUsers(response.data));
        } catch (error) {
            console.error("error: ", error);
        }
    };
};
