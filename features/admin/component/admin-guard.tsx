"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks";
import { LoadingState } from "@/components/shared/states/loading-state";

interface Props {
  children: ReactNode;
}

export function AdminGuard({ children }: Props) {
  const router = useRouter();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/login");
      return;
    }

    if (user?.role !== "ADMIN") {
      router.replace("/");
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || user?.role !== "ADMIN") {
    return <LoadingState text="Checking permissions..." />;
  }

  return <>{children}</>;
}
