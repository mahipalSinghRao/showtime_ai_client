import * as React from "react";

import {
  Avatar as UiAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <UiAvatar className={cn("border-border/60 size-10 border", className)}>
      <AvatarImage src={src} alt={alt} />

      <AvatarFallback className="bg-muted font-semibold">
        {fallback}
      </AvatarFallback>
    </UiAvatar>
  );
}
