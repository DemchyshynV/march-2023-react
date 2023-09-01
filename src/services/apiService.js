import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}