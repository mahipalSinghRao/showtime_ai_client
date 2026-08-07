"use client";

import {
  useLazyGetMeQuery,
  useRefreshTokenMutation,
} from "@/features/auth/api/authApi";
import { tokenManager } from "@/lib/api";
import { useAppDispatch } from "@/store/hooks";
import {
  clearAuth,
  setAuthenticated,
  setUser,
} from "@/store/slices/auth.slice";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  const [getMe] = useLazyGetMeQuery();
  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const refresh = await refreshToken().unwrap();

        tokenManager.setAccessToken(refresh.data.accessToken);

        const me = await getMe().unwrap();

        dispatch(setUser(me.data));

        dispatch(setAuthenticated(true));
      } catch (error) {
        console.error("Auth bootstrap failed", error);

        tokenManager.clear();

        dispatch(clearAuth());
      }
    };

    bootstrap();
  }, [dispatch, getMe, refreshToken]);

  return children;
}
