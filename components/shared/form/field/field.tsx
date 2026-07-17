import { cn } from "@/lib/utils";

interface FieldProps {
  children: React.ReactNode;
  className: string;
}

export function Field({ children, className }: FieldProps) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}
