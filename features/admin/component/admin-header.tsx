"use client";

import { useAppSelector } from "@/store/hooks";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AdminHeader() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-xl font-semibold">Admin Panel</h1>

      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium">{user?.fullName}</p>

          <p className="text-muted-foreground text-sm">{user?.role}</p>
        </div>
      </div>
    </header>
  );
}
