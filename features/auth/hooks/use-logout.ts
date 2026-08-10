"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useLogoutMutation } from "../api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { clearAuth } from "@/store/slices/auth.slice";

export function useLogout() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [logoutMutation, { isLoading }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutMutation().unwrap();

            dispatch(clearAuth());

            toast.success("Logged out successfully");

            router.replace("/auth/login");
        } catch (error: any) {
            toast.error(
                error?.data?.message || "Logout failed",
            );
        }
    };

    return {
        logout: handleLogout,
        isLoading,
    };
}