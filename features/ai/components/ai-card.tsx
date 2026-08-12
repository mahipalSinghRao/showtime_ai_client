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
  return (
    <Card className="w-full overflow-hidden rounded-3xl border transition-all hover:shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)]">
        {/* Poster */}
        <div className="flex justify-center p-4 sm:p-5 lg:block">
          <div className="w-full max-w-full sm:max-h-full sm:max-w-full lg:max-w-none">
            <MoviePoster
              posterPath={recommendation?.posterPath}
              title={recommendation?.title}
            />
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex min-w-0 flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            {/* Title + Rating */}
            <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0 flex-1">
                <h2 className="line-clamp-2 text-xl font-bold sm:text-2xl lg:text-2xl xl:text-3xl">
                  {recommendation.title}
                </h2>

                <div className="mt-2 flex flex-wrap gap-2">
                  {recommendation?.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium sm:px-3"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <RatingBadge rating={recommendation?.voteAverage || 0} />
              </div>
            </div>

            {/* Overview */}
            <p className="text-muted-foreground line-clamp-3 text-sm leading-6 sm:text-base">
              {recommendation?.overview}
            </p>

            {/* AI Reason */}
            <div className="bg-primary/5 rounded-xl border p-3 sm:p-4">
              <div className="text-primary mb-2 flex items-start gap-2 text-sm font-semibold sm:text-base">
                <Sparkles className="mt-0.5 size-4 shrink-0" />

                <span>Why AI Recommended This</span>
              </div>

              <p className="text-muted-foreground text-sm leading-6">
                {recommendation?.reason}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button asChild className="w-full sm:w-auto">
              <Link href={`/movies/${recommendation?._id}`}>
                View Details
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <div className="w-full sm:w-auto">
              <WatchlistButton movieId={recommendation?._id} />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
