"use client";

import { Heart, Play, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MovieActionsProps {
  trailerKey?: string;
}

export function MovieActions({ trailerKey }: MovieActionsProps) {
  const watchTrailer = () => {
    if (!trailerKey) return;

    // window.open(
    //   `https://www.youtube.com/watch?v=${trailerKey}`,
    //   "_blank",
    //   "noopener,noreferrer",
    // );

    const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
    window.open(trailerUrl, "_blank", "noopener,noreferrer");
  };

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
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <Button size="lg" onClick={watchTrailer} disabled={!trailerKey}>
        <Play className="mr-2 size-5 fill-current" />
        Watch Trailer
      </Button>

      <Button variant="secondary" size="lg">
        <Heart className="mr-2 size-5" />
        Watchlist
      </Button>

      <Button variant="outline" size="lg" onClick={shareMovie}>
        <Share2 className="mr-2 size-5" />
        Share
      </Button>
    </div>
  );
}
