import { baseApi } from "@/store/api/baseApi";
import { SyncMoviePayload, SyncMovieResponse } from "../types";
import { ApiResponse } from "@/types/api";

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

        logout: builder.mutation<ApiResponse<null>, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth", "User", "Watchlist"],
        }),
    }),
})


export const {
    useGetDashboardStatsQuery,
    useSyncMoviesMutation,
    useLogoutMutation,

} = adminApi;