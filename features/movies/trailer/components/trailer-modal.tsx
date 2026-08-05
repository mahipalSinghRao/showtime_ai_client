"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { getYoutubeEmbedUrl } from "../utils/youtube";

interface TrailerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trailerKey: string;
  movieTitle: string;
}

export function TrailerModal({
  open,
  onOpenChange,
  trailerKey,
  movieTitle,
}: TrailerModalProps) {
  const embedUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
    : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-0 bg-black p-2">
        <DialogHeader>
          <DialogTitle>{movieTitle} Trailer</DialogTitle>
        </DialogHeader>

        {embedUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={embedUrl}
              title={`${movieTitle} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center">
            <p className="text-muted-foreground">Trailer not available.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
