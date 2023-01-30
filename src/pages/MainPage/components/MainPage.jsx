import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import API from "../../../api/index";
import { setIsAuth } from "../../../redux/actions/authActions";

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            try {
                const res = await API.get(`/med/getGeneral`);
                console.log(res);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, []);

    return (
        <div>
                MAIN PAGE <br/>
            <button onClick={() => dispatch(setIsAuth(false))}>leave</button>
        </div>
    );
};

export default MainPage;