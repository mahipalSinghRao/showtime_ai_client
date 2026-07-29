"use client";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useRemoveFromWatchlistMutation } from "../api/watchlist.api";

interface Props {
  movieId: string;
}

export function RemoveButton({ movieId }: Props) {
  const [removeMovie, { isLoading }] = useRemoveFromWatchlistMutation();

  const handleRemove = async () => {
    try {
      await removeMovie(movieId).unwrap();

      toast.success("Movie removed");
    } catch {
      toast.error("Unable to remove movie");
    }
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      disabled={isLoading}
      onClick={handleRemove}
    >
      <Trash2 className="mr-2 h-4 w-4" />
      Remove
    </Button>
  );
}
