import { apiClient } from "./client";
import { tokenManager } from "./token-manager";

interface RefreshResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: { accessToken: string }
}

export async function refreshAccessToken() {
    const response = await apiClient.post<RefreshResponse>("/auth/refresh-token");

    const token = response.data.data.accessToken;

    tokenManager.setAccessToken(token);

    return token;
}