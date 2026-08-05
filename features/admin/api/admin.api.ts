import { baseApi } from "@/store/api/baseApi";
import { SyncMoviePayload, SyncMovieResponse } from "../types";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: "/movies/stats",
            }),
            providesTags: ["Movies"],
        }),

        syncMovies: builder.mutation<
            SyncMovieResponse,
            SyncMoviePayload
        >({
            query: ({ source, page }) => ({
                url: "/movies/sync",
                method: "POST",
                params: {
                    source,
                    page,
                },
            }),
            invalidatesTags: ["Movies"],
        }),
    }),
})


export const {
    useGetDashboardStatsQuery,
    useSyncMoviesMutation
} = adminApi;