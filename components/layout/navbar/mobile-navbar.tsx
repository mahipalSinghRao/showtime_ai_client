"use client";

import Link from "next/link";
import { Heart, LogOutIcon, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar } from "@/components/shared/avatar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Trending", href: "/trending" },
  { label: "AI", href: "/ai" },
];

export function MobileNavbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const isAdmin = user?.role === "ADMIN";
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col justify-between">
          <div className="mt-10 flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:bg-muted rounded-lg px-3 py-2 text-sm transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* 
          <div className="">
            {isAuthenticated ? (
              <Button variant="outline" className="w-full">
                Welcome, {user?.fullName}{" "}
              </Button>
            ) : (
              <Button asChild className="right-0 left-0 w-full">
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div> */}

          <div className="flex flex-col items-center">
            <ThemeToggle />
            {isAuthenticated && (
              <Link href="/watchlist">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80"
                >
                  <Heart className="h-5 w-5 scale-110 fill-red-500 text-red-500 transition-all duration-200" />
                  Whishlist
                </Button>
              </Link>
            )}

            {isAuthenticated ? (
              <div className="w-full">
                {isAdmin && (
                  <Button asChild className="w-full">
                    <Link href="/admin/dashboard">Admin Dashboard</Link>
                  </Button>
                )}
              </div>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
