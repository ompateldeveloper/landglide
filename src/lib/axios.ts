import axios from "axios";
const baseUrl = "http://localhost:4000/"
const instance = axios.create({
    baseURL:baseUrl,
    withCredentials:true
});
export {instance};
