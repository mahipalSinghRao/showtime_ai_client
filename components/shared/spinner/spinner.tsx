import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};

export function Spinner({ className, size = "md" }: SpinnerProps) {
  return (
    <Loader2
      className={cn("text-primary animate-spin", sizeClasses[size], className)}
      aria-hidden="true"
    />
  );
}
