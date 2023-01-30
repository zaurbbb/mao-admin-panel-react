import React, { useEffect } from "react";
import API from "../../../api/index";

const UsersPage = () => {
    useEffect(() => {
        async function fetch() {
            try {
                const res = await API.get(`/med/getCatalogue`);
                console.log(res);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);

    return (
        <div>
                asassaas
        </div>
    );
};

export default UsersPage;