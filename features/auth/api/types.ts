import { ApiResponse } from "@/types/api";

export type UserRole = "USER" | "ADMIN";

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    avatar?: string;
    role: UserRole;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthPayload {
    user: User;
    accessToken: string;
}

export type AuthResponse = ApiResponse<AuthPayload>