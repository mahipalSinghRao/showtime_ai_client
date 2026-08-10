import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { User } from "@/features/auth/api/types";

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: true
}


const authSlice = createSlice({
    name: "auth",

    initialState,
    reducers: {

        setUser: (
            state,
            action: PayloadAction<User | null>
        ) => {
            state.user = action.payload
        },

        clearAuth: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },

        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload
        },

        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload
        },

        setLoading: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.isLoading = action.payload;
        },
    }
})

export const {
    setUser,
    setAccessToken,
    setAuthenticated,
    setLoading,
    clearAuth,
} = authSlice.actions;

export default authSlice.reducer;