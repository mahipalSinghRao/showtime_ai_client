"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface MoviePosterProps {
  posterPath: string;
  title: string;
  className?: string;
  priority?: boolean;
}

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export function MoviePoster({
  posterPath,
  title,
  className,
  priority = false,
}: MoviePosterProps) {
  return (
    <div
      className={cn(
        "bg-muted relative aspect-[2/2.5] overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Image
        src={`${TMDB_IMAGE_URL}${posterPath}`}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width:768px) 50vw,
               (max-width:1200px) 33vw,
               20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}
