"use client";

import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";

import { useGetMovieQuery } from "../api/movie.api";
import { MovieHeader } from "./movie-header";
import { MovieActions } from "./movie-actions";
import { MovieOverview } from "./movie-overview";
import { MovieCast } from "./movie-cast";
import { SimilarMovies } from "./similar-movies";

interface MovieDetailsProps {
  id: string;
}

export function MovieDetails({ id }: MovieDetailsProps) {
  const { data, isLoading, error } = useGetMovieQuery(id);

  if (isLoading) {
    return <LoadingState text="Loading movie..." />;
  }

  if (error || !data) {
    return <ErrorState message="Movie not found." />;
  }

  const movie = data.data;
  console.log(movie);

  return (
    <main>
      <MovieHeader movie={movie} />
      {/* <MovieActions trailerKey={movie.trailerKey} /> */}
      <MovieOverview movie={movie} />
      <MovieCast movie={movie} />
      <SimilarMovies movieId={movie._id} />
    </main>
  );
}
