import { cn } from "@/lib/utils";

interface HelperProps {
  children: React.ReactNode;
  className?: string;
}

export function Helper({ children, className }: HelperProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}
