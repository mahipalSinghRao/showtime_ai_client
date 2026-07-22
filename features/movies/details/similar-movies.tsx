"use client";

import { EmptyState } from "@/components/shared/states/empty-state";
import { ErrorState } from "@/components/shared/states/error-state";
import { LoadingState } from "@/components/shared/states/loading-state";

import { useGetSimilarMoviesQuery } from "../api/movie.api";
import { MovieCarousel } from "../carousel/movie-carousel";

interface SimilarMoviesProps {
  movieId: string;
}

export function SimilarMovies({ movieId }: SimilarMoviesProps) {
  const { data, isLoading, error } = useGetSimilarMoviesQuery(movieId);

  if (isLoading) {
    return <LoadingState text="Loading similar movies..." />;
  }

  if (error) {
    return <ErrorState message="Unable to load similar movies." />;
  }

  if (!data?.data.length) {
    return (
      <EmptyState
        title="No Similar Movies"
        description="No recommendations available."
      />
    );
  }

  return <MovieCarousel title="Similar Movies" movies={data.data} />;
}
