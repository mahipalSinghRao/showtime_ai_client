import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import authReducer from "./slices/auth.slice"

export const rootReducer = combineReducers({
    auth: authReducer,

    [baseApi.reducerPath]: baseApi.reducer
})