"use client";

import { Heart, LogOutIcon, UserIcon, Shield } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar } from "@/components/shared/avatar";

import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { MobileNavbar } from "./mobile-navbar";
import { useAppSelector } from "@/store/hooks";

export function Navbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center gap-10">
            <NavbarLogo />

            <NavbarLinks />
          </div>

          <div className="flex items-center gap-2 max-lg:hidden">
            <ThemeToggle />
            {isAuthenticated && (
              <Link href="/watchlist">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80"
                >
                  <Heart className="h-5 w-5 scale-110 fill-red-500 text-red-500 transition-all duration-200" />
                </Button>
              </Link>
            )}

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full p-0"
                  >
                    <Avatar fallback={user?.fullName?.charAt(0) ?? "U"} />
                  </Button>
                </DropdownMenuTrigger>

                {/* <DropdownMenuSeparator /> */}

                <DropdownMenuContent align="end" className="w-56">
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin/dashboard">
                        <Shield className="mr-2 h-4 w-4" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/watchlist">
                      <Heart className="mr-2 h-4 w-4" />
                      Watchlist
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="text-red-500 focus:text-red-500">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>
          <MobileNavbar />
        </div>
      </Container>
    </header>
  );
}
