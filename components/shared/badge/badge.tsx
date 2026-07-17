import { Badge as UiBadge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

interface BadgeProps
  extends
    React.ComponentPropsWithoutRef<typeof UiBadge>,
    VariantProps<typeof badgeVariants> {
  rounded?: boolean;
}

/**
 * ShowTime Badge
 *
 * Used by:
 * - Movie Genre
 * - Movie Rating
 * - AI Recommendation
 * - Featured
 * - Trending
 */

export function Badge({
  className,
  variant,
  rounded = true,
  ...props
}: BadgeProps) {
  return (
    <UiBadge
      variant={variant}
      className={cn(
        "px-3 py-1 font-medium tracking-wide transition-colors",
        rounded && "rounded-full",
        className,
      )}
      {...props}
    />
  );
}
