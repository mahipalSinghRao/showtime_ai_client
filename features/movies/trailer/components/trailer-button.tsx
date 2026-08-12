"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import { TrailerModal } from "./trailer-modal";

interface TrailerButtonProps {
  trailerKey: string;
  movieTitle?: string;
  name?: string;
}

export function TrailerButton({
  trailerKey,
  movieTitle,
  name,
}: TrailerButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        disabled={!trailerKey}
        // size="lg"
        className="gap-2"
      >
        <Play className="h-2 w-2 fill-current" />
        {name}
      </Button>

      <TrailerModal
        open={open}
        onOpenChange={setOpen}
        trailerKey={trailerKey}
        movieTitle={movieTitle ?? ""}
      />
    </>
  );
}
