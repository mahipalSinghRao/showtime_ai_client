"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { MoviePoster } from "@/features/movies/components/movie-poster";
import { RatingBadge } from "@/features/movies/components/rating-badge";

import { Recommendation } from "../types";
import { WatchlistButton } from "@/features/watchlist/components/watchlist-button";

interface AiCardProps {
  recommendation: Recommendation;
}

export function AiCard({ recommendation }: AiCardProps) {
  // const movie = recommendation;
  const reason = recommendation.reason;

  return (
    <Card className="overflow-hidden rounded-3xl border transition-all hover:shadow-xl">
      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="p-5">
          <MoviePoster
            posterPath={recommendation?.movie?.posterPath}
            title={recommendation?.movie?.title}
          />
        </div>

        <CardContent className="flex flex-col justify-between p-6">
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {recommendation?.movie.title}
                </h2>

                <div className="mt-2 flex flex-wrap gap-2">
                  {recommendation?.movie?.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <RatingBadge rating={recommendation?.movie.voteAverage || 0} />
            </div>

            <p className="text-muted-foreground line-clamp-3">
              {recommendation?.movie.overview}
            </p>

            <div className="bg-primary/5 rounded-xl border p-4">
              <div className="text-primary mb-2 flex items-center gap-2 font-semibold">
                <Sparkles className="size-4" />
                Why AI Recommended This
              </div>

              <p className="text-muted-foreground text-sm leading-6">
                {reason}
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href={`/movies/${recommendation?.movie._id}`}>
                View Details
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <WatchlistButton movieId={recommendation?.movie._id} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
