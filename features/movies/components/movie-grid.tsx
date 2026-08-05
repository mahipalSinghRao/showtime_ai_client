"use client";

import { MovieCard } from "./movie-card";

interface MovieGridProps {
  movies: Movie[];
  pagination: Pagination;
  watchlistMode?: boolean;
}

export function MovieGrid({
  movies,
  pagination,
  watchlistMode = false,
}: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          pagination={pagination}
          watchlistMode={watchlistMode}
        />
      ))}
    </div>
  );
}
