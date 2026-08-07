"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Film,
  Users,
  User,
  CloudSync,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menus = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Visit User Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Sync TMDB Movies",
    href: "/admin/sync",
    icon: CloudSync,
  },
  {
    label: "Movies",
    href: "/admin/movies",
    icon: Film,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: User,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-card flex h-screen w-64 flex-col border-r">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">ShowTime Admin</h2>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <nav className="space-y-2 p-4">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{menu.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <Button variant="destructive" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
