import { cn } from "@/lib/utils";

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Caption({ children, className }: CaptionProps) {
  return (
    <span className={cn("text-muted-foreground text-xs", className)}>
      {children}
    </span>
  );
}
