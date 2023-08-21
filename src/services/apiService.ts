import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({baseURL})

export type {
    IRes
}
export {
    apiService
}