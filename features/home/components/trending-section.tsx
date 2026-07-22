"use client";

import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";
import { EmptyState } from "@/components/shared/states/empty-state";

import { useGetTrendingMoviesQuery } from "@/features/movies";

import { MovieCarousel } from "@/features/movies/carousel/movie-carousel";

export function TrendingSection() {
  const { data, isLoading, error } = useGetTrendingMoviesQuery();

  if (isLoading) {
    return <LoadingState text="Loading trending movies..." />;
  }

  if (error) {
    return <ErrorState message="Unable to load trending movies." />;
  }

  if (!data?.data.length) {
    return (
      <EmptyState
        title="No trending movies"
        description="Trending movies will appear here."
      />
    );
  }

  return <MovieCarousel title="Trending Movies" movies={data.data} />;
}
