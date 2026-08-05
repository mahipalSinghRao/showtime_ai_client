"use client";

import Link from "next/link";
import { CalendarDays, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Movie } from "../api/movie.types";
import { MoviePoster } from "./movie-poster";
import { RatingBadge } from "./rating-badge";
import { Button } from "@/components/ui/button";
import { WatchlistButton } from "@/features/watchlist/components/watchlist-button";
import { TrailerButton } from "../trailer/components/trailer-button";

interface MovieCardProps {
  movie: Movie;
  watchlistMode?: boolean;
}

export function MovieCard({ movie, watchlistMode = false }: MovieCardProps) {
  return (
    <Card className="group border-border/60 hover:border-primary/40 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute top-2 left-4 z-20 rounded-full p-2">
        <WatchlistButton
          movieId={movie._id}
          variant={watchlistMode ? "watchlist" : "default"}
        />
      </div>
      <div className="absolute bottom-28 left-4 z-20 translate-y-4 rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {/* <Button size="sm">Play</Button> */}
        <TrailerButton trailerKey={movie.trailerKey} movieTitle={movie.title} />
      </div>
      <Link href={`/movies/${movie._id}`}>
        <div className="group relative overflow-hidden rounded-2xl">
          <MoviePoster posterPath={movie?.posterPath} title={movie?.title} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

          <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md">
            {movie?.voteAverage > 0 ? (
              <RatingBadge rating={movie?.voteAverage} />
            ) : (
              <span className="rounded-full bg-blue-900 p-2 text-xs text-white">
                N/A
              </span>
            )}
          </div>
        </div>

        <CardContent className="space-y-3 p-4">
          <h3 className="line-clamp-1 text-xl font-bold">{movie.title}</h3>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {movie?.genres?.slice(0, 1).map((genre) => (
                <span
                  key={genre}
                  className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4" />
              <span className="text-muted-foreground text-sm">
                {new Date(movie?.releaseDate).getFullYear()}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
