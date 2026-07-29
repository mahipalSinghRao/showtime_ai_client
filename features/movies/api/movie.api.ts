import { baseApi } from "@/store/api/baseApi";

import {
    GetFeaturedResponse,
    GetMovieResponse,
    GetMoviesResponse,
    GetSimilarResponse,
    GetTrendingResponse,
    MovieStatsResponse,
} from "./movie.types";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<
            GetMoviesResponse,
            {
                page?: number;
                limit?: number;
                search?: string;
                genres?: string;
                sort?: string;
            }
        >({
            query: (params) => ({
                url: "/movies/get",
                params,
            }),

            providesTags: ["Movies"],
        }),

        getFeaturedMovies: builder.query<GetFeaturedResponse, void>({
            query: () => ({
                url: "/movies/featured",
            }),

            providesTags: ["Movies"],
        }),

        getTrendingMovies: builder.query<GetTrendingResponse, void>({
            query: () => ({
                url: "/movies/trending",
            }),

            providesTags: ["Movies"],
        }),

        getMovie: builder.query<GetMovieResponse, string>({
            query: (id) => ({
                url: `/movies/${id}`,
            }),

            providesTags: ["Movies"],
        }),

        getSimilarMovies: builder.query<GetSimilarResponse, string>({
            query: (id) => ({
                url: `/movies/${id}/similar`,
            }),

            providesTags: ["Movies"],
        }),

        getMovieStats: builder.query<MovieStatsResponse, void>({
            query: () => ({
                url: "/movies/stats",
            }),

            providesTags: ["Movies"],
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetFeaturedMoviesQuery,
    useGetTrendingMoviesQuery,
    useGetMovieQuery,
    useGetSimilarMoviesQuery,
    useGetMovieStatsQuery,
} = movieApi;