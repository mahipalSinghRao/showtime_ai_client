import Image from "next/image";

import { cn } from "@/lib/utils";

export interface MoviePosterProps {
  title: string;
  posterPath: string;
  className?: string;
  priority?: boolean;
}

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export function MoviePoster({
  title,
  posterPath,
  className,
  priority = false,
}: MoviePosterProps) {
  const imageSrc = posterPath.startsWith("http")
    ? posterPath
    : `${TMDB_IMAGE_URL}/${posterPath}`;

  return (
    <div
      className={cn(
        "bg-muted relative aspect-[2/3] overflow-hidden rounded-[18px]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 20vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
