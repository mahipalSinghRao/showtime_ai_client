import { apiClient } from "@/lib/api";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError } from "axios";

interface AxiosArgs {
    url: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: unknown;
    params?: unknown
}

export const axiosBaseQuery = (): BaseQueryFn<AxiosArgs, unknown, unknown> => async ({ url, method = "GET", data, params }) => {
    try {
        const result = await apiClient({
            url, method, data, params
        })
        return { data: result.data }
    } catch (error) {
        const err = error as AxiosError;
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data,
            }
        }
    }
} 