import { ApiResponse } from "@/types/api";

export type UserRole = "USER" | "ADMIN";

export interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    role: UserRole;
    fullName: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    fullName: string;
    username: string;
    email: string;
    password: string;
}

export interface AuthPayload {
    user: User;
    accessToken: string;
}

export type AuthResponse = ApiResponse<AuthPayload>