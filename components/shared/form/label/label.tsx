import { Label as UILabel } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface LabelProps extends React.ComponentProps<typeof UILabel> {
  required?: boolean;
}

export function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <UILabel className={cn("text-sm font-medium", className)} {...props}>
      {children}

      {required && <span className="text-destructive ml-1">*</span>}
    </UILabel>
  );
}
