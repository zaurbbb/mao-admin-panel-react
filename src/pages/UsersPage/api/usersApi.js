import axios from "axios";
import Api from "../../../api";

export default axios.create({
    baseURL: `${Api}users/getUsers`,
    withCredentials: true
});