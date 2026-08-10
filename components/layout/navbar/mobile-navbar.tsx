"use client";

import Link from "next/link";
import { Heart, LogOutIcon, Menu, Shield } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useLogout } from "@/features/auth/hooks/use-logout";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Trending", href: "/trending" },
  { label: "AI", href: "/ai" },
];

export function MobileNavbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { logout, isLoading: isLoggingOut } = useLogout();
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Menu Button */}
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>

        {/* Mobile Navigation */}
        <SheetContent
          side="left"
          className="flex w-[85%] max-w-sm flex-col justify-between p-0"
        >
          {/* Top */}
          <div className="flex flex-col">
            {/* Navigation */}
            <nav className="mt-12 flex flex-col gap-1 px-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:bg-muted rounded-lg px-4 py-3 text-base font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom */}
          <div className="border-t p-4">
            <div className="flex flex-col gap-3">
              {/* Theme */}
              <div className="flex items-center justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Appearance</span>

                <ThemeToggle />
              </div>

              {isAuthenticated ? (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/watchlist">
                      <Heart className="mr-2 h-5 w-5 fill-red-500 text-red-500" />
                      Watchlist
                    </Link>
                  </Button>

                  {isAdmin && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Link href="/admin/dashboard">
                        <Shield className="mr-2 h-5 w-5" />
                        Admin Dashboard
                      </Link>
                    </Button>
                  )}

                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                    onClick={logout}
                    disabled={isLoggingOut}
                  >
                    <Link href="/">
                      <LogOutIcon className="mr-2 h-4 w-4" />

                      {isLoggingOut ? "Logging out..." : "Logout"}
                    </Link>
                  </Button>
                </>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/auth/login">Login</Link>
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
