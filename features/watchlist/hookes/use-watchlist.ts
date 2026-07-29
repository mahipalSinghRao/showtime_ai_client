"use client"

import { useGetWatchlistQuery } from "../api/watchlist.api";

export function useWatchlist() {
    const { data, isLoading, error } = useGetWatchlistQuery();

    const watchlist = data?.data ?? [];

    const isSaved = (movieId: string) => {
        return watchlist.some((item) => item.movie?._id === movieId)
    }

    return {
        watchlist, isLoading, error, isSaved
    }
}