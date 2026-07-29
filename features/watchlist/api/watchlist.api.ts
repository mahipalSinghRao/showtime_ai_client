import { baseApi } from "@/store/api/baseApi";
import { WatchlistResponse } from "../types";


export const watchlistApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWatchlist: builder.query<WatchlistResponse, void>({
            query: () => ({
                url: "/watchlist"
            }),
            providesTags: ["Watchlist"],
        }),

        addToWatchlist: builder.mutation<any, string>({
            query: (movieId) => ({
                url: `/watchlist`,
                method: "POST",
                data: {
                    movie: movieId,
                }
            }),
            invalidatesTags: ["Watchlist"]
        }),

        removeFromWatchlist: builder.mutation<any, string>({
            query: (movieId) => ({
                url: `/watchlist/${movieId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Watchlist"]
        })
    })
})

export const {
    useGetWatchlistQuery,
    useAddToWatchlistMutation,
    useRemoveFromWatchlistMutation, }
    = watchlistApi;