import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({baseURL});

export {
    apiService
}
