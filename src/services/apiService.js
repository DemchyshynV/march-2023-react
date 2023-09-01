import axios from "axios";
import {baseURL, urls} from "../constants/urls";
import {authService} from "./authService";
import {router} from "../router";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req => {
    const access = authService.getAccessToken();

    if (access) {
        req.headers.Authorization = `Bearer ${access}`
    }

    return req
})

let isRefreshing = false
const waitReqList =[]

apiService.interceptors.response.use(
    res=>res,
    async (error)=>{
        const originalRequest = error.config;

        if (error.response.status === 401){
            if (!isRefreshing){
                isRefreshing = true
                try {
                    await authService.refresh()
                    isRefreshing = false
                    startReqFromWaitListAfterRefresh()
                    return apiService(originalRequest)
                }catch (e) {
                    authService.deleteTokens()
                    isRefreshing=false
                    await router.navigate('/login?SessionExpired=True')
                    return Promise.reject(error)
                }
            }
            if(originalRequest.url === urls.auth.refresh){
                return Promise.reject(error)
            }
            return new Promise(resolve => {
                subscribeToReqWaitList(()=>resolve(apiService(originalRequest)))
            })
        }
        return Promise.reject(error)
    }
)

const subscribeToReqWaitList = (cb)=>{
    waitReqList.push(cb)
}

const startReqFromWaitListAfterRefresh = ()=>{
    while (waitReqList.length){
        const cb = waitReqList.pop();
        cb()
    }
}

export {
    apiService
}