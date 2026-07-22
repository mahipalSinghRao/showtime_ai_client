"use client";

import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";
import { EmptyState } from "@/components/shared/states/empty-state";

import { useGetFeaturedMoviesQuery } from "@/features/movies";

import { MovieCarousel } from "@/features/movies/carousel/movie-carousel";

export function FeaturedSection() {
  const { data, isLoading, error } = useGetFeaturedMoviesQuery();

  if (isLoading) {
    return <LoadingState text="Loading featured movies..." />;
  }

  if (error) {
    return <ErrorState message="Unable to load featured movies." />;
  }

  if (!data?.data.length) {
    return (
      <EmptyState
        title="No featured movies"
        description="Featured movies will appear here."
      />
    );
  }

  return <MovieCarousel title="Featured Movies" movies={data.data} />;
}
