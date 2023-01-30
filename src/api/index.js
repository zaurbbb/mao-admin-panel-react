import axios from "axios";
import { serverAddress } from "../config/serverAddress";


export default axios.create({
    baseURL: serverAddress,
    withCredentials: true
});