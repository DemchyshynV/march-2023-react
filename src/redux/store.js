import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carReducer
    }
});

export {
    store
}
