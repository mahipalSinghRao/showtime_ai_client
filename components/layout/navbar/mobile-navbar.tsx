"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Trending", href: "/trending" },
  { label: "AI", href: "/ai" },
];

export function MobileNavbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
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

          <div className="">
            {isAuthenticated ? (
              <Button variant="outline" className="w-full">
                Welcome, {user?.fullName}{" "}
              </Button>
            ) : (
              <Button asChild className="w-full left-0 right-0">
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
