import {apiService, IRes} from "./apiService";
import {IPost} from "../interfaces/postInterface";
import {urls} from "../contants/urls";

const postService = {
    getAll():IRes<IPost[]>{
        return apiService.get(urls.posts)
    }
}

export {
    postService
}