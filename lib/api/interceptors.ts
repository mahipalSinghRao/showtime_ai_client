
import axios from "axios";
import { apiClient } from "./client";
import { tokenManager } from "./token-manager";
import { getIsRefreshing, notifySubscribers, setRefreshing, subscribeTokenRefresh } from "./request-queue";
import { refreshAccessToken } from "./refresh-token";

apiClient.interceptors.request.use((config) => {
    const token = tokenManager.getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})

apiClient.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (axios.isAxiosError(error) &&
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            if (getIsRefreshing()) {
                return new Promise((resolve) => {
                    subscribeTokenRefresh((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(apiClient(originalRequest))
                    })
                })
            }

            try {
                setRefreshing(true);
                const token = await refreshAccessToken();
                notifySubscribers(token);
                originalRequest.headers.Authorization =
                    `Bearer ${token}`;

                return apiClient(originalRequest);
            } catch {
                tokenManager.clear();
                window.location.href = "/auth/login";
                return Promise.reject(error)
            } finally {
                setRefreshing(false)
            }
        }
        return Promise.reject(error)
    }
)