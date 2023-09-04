import {apiService} from "./apiService";
import {ICar} from "../interfaces/carInterface";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => apiService.get<ICar[]>(urls.cars.base),
    create: (data: ICar) => apiService.post<ICar>(urls.cars.base, data),
    updateById: (id: number, data: ICar) => apiService.put<ICar>(urls.cars.byId(id), data),
    deleteById: (id: number) => apiService.delete<void>(urls.cars.byId(id))
}

export {
    carService
}