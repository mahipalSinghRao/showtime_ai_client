import { cn } from "@/lib/utils";

type Variant = "default" | "muted" | "subtle";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant: Variant;
}

const variants = {
  default: "text-base text-foreground",
  muted: "text-base text-muted-foreground",
  subtle: "text-sm text-muted-foreground",
};

export function Text({ children, className, variant = "default" }: TextProps) {
  return <p className={cn(variants[variant], className)}>{children}</p>;
}
