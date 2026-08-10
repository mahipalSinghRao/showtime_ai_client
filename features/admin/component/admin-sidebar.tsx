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
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLogout } from "@/features/auth/hooks/use-logout";

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
  const { logout, isLoading: isLoggingOut } = useLogout();

  const menuItems = (
    <nav className="space-y-2 p-4">
      {menus.map((menu) => {
        const Icon = menu.icon;
        const active = pathname === menu.href;

        return (
          <Link
            key={menu.href}
            href={menu.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{menu.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r lg:flex lg:flex-col">
        <div className="border-b p-6">
          <h2 className="text-xl font-bold">ShowTime Admin</h2>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          {menuItems}

          <div className="border-t p-4">
            <Button
              variant="destructive"
              className="w-full"
              onClick={logout}
              disabled={isLoggingOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-20 right-6 z-50 rounded-full shadow-lg"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0">
            <div className="border-b p-6">
              <h2 className="text-xl font-bold">ShowTime Admin</h2>
            </div>

            <div className="flex h-[calc(100vh-81px)] flex-col justify-between">
              {menuItems}

              <div className="border-t p-4">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={logout}
                  disabled={isLoggingOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
