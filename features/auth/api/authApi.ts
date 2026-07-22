import { baseApi } from "@/store/api/baseApi";
import { AuthResponse, LoginRequest, RegisterRequest, User } from "./types";
import { ApiResponse } from "@/types/api";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                data: body
            }),
            invalidatesTags: ["Auth"],
        }),

        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                data: body
            }),
            invalidatesTags: ["Auth"]
        }),

        getMe: builder.query<ApiResponse<User>, void>({
            query: () => ({
                url: "/user/me",
            }),

            providesTags: ["Auth"],
        }),

        logout: builder.mutation<ApiResponse<null>, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags: ["Auth"],
        }),

        refreshToken: builder.mutation<ApiResponse<{ accessToken: string }>, void>({
            query: () => ({
                url: "/auth/refresh-token",
                method: "POST"
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useLazyGetMeQuery,
    useLogoutMutation,
    useRefreshTokenMutation,
} = authApi;