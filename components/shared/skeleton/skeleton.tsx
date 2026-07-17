import * as React from "react";

import { Skeleton as UiSkeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.ComponentPropsWithoutRef<
  typeof UiSkeleton
> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <UiSkeleton className={cn("rounded-xl", className)} {...props} />;
}
