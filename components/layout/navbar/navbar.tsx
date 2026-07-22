"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar } from "@/components/shared/avatar";

import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { MobileNavbar } from "./mobile-navbar";
// import { useGetMeQuery } from "@/features/auth/api/authApi";
import { useAppSelector } from "@/store/hooks";

export function Navbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // console.log(user);

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center gap-10">
            <NavbarLogo />

            <NavbarLinks />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="size-5" />
            </Button>

            <ThemeToggle />

            <Avatar fallback="MS" className="hidden md:flex" />

            <div className="max-lg:hidden">
              {isAuthenticated ? (
                <Button variant="outline">Welcome, {user?.fullName}</Button>
              ) : (
                <Button asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              )}
            </div>

            <MobileNavbar />
          </div>
        </div>
      </Container>
    </header>
  );
}
