import { baseApi } from "@/store/api/baseApi";
import { AiRequest, AiResponse } from "../types";

export const aiApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        recommendMovies: builder.mutation<AiResponse, AiRequest>({
            query: (body) => ({
                url: "/ai/recommend",
                method: "POST",
                data: body
            })
        })
    })
})

export const { useRecommendMoviesMutation } = aiApi;