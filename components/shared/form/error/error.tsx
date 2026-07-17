import { cn } from "@/lib/utils";

interface ErrorProps {
  children?: React.ReactNode;
  className?: string;
}

export function Error({ children, className }: ErrorProps) {
  if (!children) return null;

  return (
    <p className={cn("text-destructive text-sm font-medium", className)}>
      {children}
    </p>
  );
}
