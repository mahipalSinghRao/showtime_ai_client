"use client";

import { Heart, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import {
  useAddToWatchlistMutation,
  useRemoveFromWatchlistMutation,
} from "../api/watchlist.api";
import { useWatchlist } from "../hookes/use-watchlist";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { LoginRequiredDialog } from "@/features/component/login-required-dialog";

interface Props {
  movieId: string;
  variant?: "default" | "watchlist";
}

export function WatchlistButton({ movieId, variant = "default" }: Props) {
  const [open, setOpen] = useState(false);
  const { isSaved } = useWatchlist();
  const saved = isSaved(movieId);

  const [addToWatchlist, { isLoading: adding }] = useAddToWatchlistMutation();
  const [removeFromWatchlist, { isLoading: removing }] =
    useRemoveFromWatchlistMutation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const isLoading = adding || removing;

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      setOpen(true);
      return;
    }

    try {
      if (variant === "watchlist") {
        await removeFromWatchlist(movieId).unwrap();
        toast.success("Removed from Watchlist");
      } else {
        if (saved) {
          toast.info("Already in your Watchlist");
          return;
        }

        await addToWatchlist(movieId).unwrap();
        toast.success("Added to Watchlist");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Button onClick={handleClick} size="icon" variant="secondary">
        {variant === "watchlist" ? (
          <Trash2 className="h-4 w-4 text-red-500" />
        ) : (
          <Heart
            className={`h-5 w-5 transition-all duration-200 ${
              saved
                ? "scale-110 fill-red-500 text-red-500"
                : "text-white hover:text-red-400"
            }`}
          />
        )}
      </Button>

      <LoginRequiredDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
