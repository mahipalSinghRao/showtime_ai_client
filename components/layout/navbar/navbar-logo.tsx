import Link from "next/link";
import { Clapperboard } from "lucide-react";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-90"
    >
      <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-xl">
        <Clapperboard className="size-5" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">ShowTime AI</span>

        <span className="text-muted-foreground text-xs">Movie Discovery</span>
      </div>
    </Link>
  );
}
