import * as React from "react";

import {
  Card as UiCard,
  CardContent as UiCardContent,
  CardDescription as UiCardDescription,
  CardFooter as UiCardFooter,
  CardHeader as UiCardHeader,
  CardTitle as UiCardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

/**
 * ShowTime AI Base Card
 *
 * Used by:
 * - Movie Card
 * - Review Card
 * - Profile Card
 * - Recommendation Card
 * - Watchlist Card
 */

type CardProps = React.ComponentPropsWithoutRef<typeof UiCard>;

type CardHeaderProps = React.ComponentPropsWithoutRef<typeof UiCardHeader>;

type CardTitleProps = React.ComponentPropsWithoutRef<typeof UiCardTitle>;

type CardDescriptionProps = React.ComponentPropsWithoutRef<
  typeof UiCardDescription
>;

type CardContentProps = React.ComponentPropsWithoutRef<typeof UiCardContent>;

type CardFooterProps = React.ComponentPropsWithoutRef<typeof UiCardFooter>;

export function Card({ className, ...props }: CardProps) {
  return (
    <UiCard
      className={cn(
        "border-border/60 bg-card rounded-[18px] border shadow-sm transition-all duration-300",
        "hover:border-border hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <UiCardHeader className={cn("space-y-2 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <UiCardTitle
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <UiCardDescription
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardContentProps) {
  return <UiCardContent className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <UiCardFooter
      className={cn("flex items-center justify-between p-6 pt-0", className)}
      {...props}
    />
  );
}
