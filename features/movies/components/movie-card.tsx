"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Movie } from "../api/movie.types";
import { MoviePoster } from "./movie-poster";
import { RatingBadge } from "./rating-badge";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const genre = movie.genres.slice(0, 2).map((genre) => genre);

  return (
    <Link href={`/movies/${movie._id}`}>
      <Card className="group border-border/60 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="group relative overflow-hidden rounded-2xl">
          <MoviePoster posterPath={movie.posterPath} title={movie.title} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-4 left-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Button size="sm">Play</Button>
          </div>

          <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md">
            <RatingBadge rating={movie.voteAverage || 4} />
          </div>
        </div>

        <CardContent className="space-y-3 p-4">
          <h3 className="line-clamp-1 text-xl font-bold">{movie.title}</h3>

          <div className="flex items-center justify-between">
            {movie.genres.length > 0 ? (
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                {genre}
              </span>
            ) : (
              <span className="text-muted-foreground text-xs">Unknown</span>
            )}
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4" />
              <span className="text-muted-foreground text-sm">
                {new Date(movie.releaseDate).getFullYear()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
