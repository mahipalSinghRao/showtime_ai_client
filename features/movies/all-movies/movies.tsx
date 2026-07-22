"use client";

import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";
import { EmptyState } from "@/components/shared/states/empty-state";

import { useGetMoviesQuery } from "../api/movie.api";
import { MovieCard } from "../components/movie-card";
import { Container } from "@/components/layout/container";

export function Movies() {
  const { data, isLoading, error } = useGetMoviesQuery();

  const movies = data?.data.movies ?? [];

  console.log(movies)

  if (isLoading) {
    return <LoadingState text="Loading movies..." />;
  }

  if (error) {
    return <ErrorState message="Unable to load movies." />;
  }

  if (!movies.length) {
    return (
      <EmptyState
        title="No Movies Found"
        description="Movies will appear here."
      />
    );
  }

  return (
    <Container>
      <section className="px-10 py-10">
        <h2 className="py-6 text-4xl font-bold tracking-tight">All Movie's</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </section>
    </Container>
  );
}
