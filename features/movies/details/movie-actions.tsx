"use client";

import { Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TrailerButton } from "../trailer/components/trailer-button";
import { WatchlistButton } from "@/features/watchlist/components/watchlist-button";

interface MovieActionsProps {
  trailerKey: string;
  watchlistMode?: boolean;
  movieId: string;
}

export function MovieActions({
  trailerKey,
  watchlistMode,
  movieId,
}: MovieActionsProps) {
  const shareMovie = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });

      return;
    }

    await navigator.clipboard.writeText(url);

    toast.success("Movie link copied.");
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <TrailerButton trailerKey={trailerKey}  name="Watch Trailer"/>

      <WatchlistButton
        movieId={movieId}
        variant={watchlistMode ? "watchlist" : "default"}
      />

      <Button variant="outline" size="lg" onClick={shareMovie}>
        <Share2 className="mr-2 size-5" />
        Share
      </Button>
    </div>
  );
}
