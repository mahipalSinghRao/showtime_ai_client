import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",

    baseQuery: axiosBaseQuery(),

    tagTypes: [
        "Auth",
        "User",
        "Movies",
        "Review",
        "Watchlist",
        "AI",
    ],

    endpoints: () => ({}),
});