"use client";

import { Container } from "@/components/layout/container";
import {  useGetTrendingMoviesQuery } from "../api/movie.api";
import { MovieFilter } from "../components/movie-filter";
import { MovieGrid } from "../components/movie-grid";
// import { MoviePagination } from "../components/movie-pagination";
import { useMovieFilter } from "../hooks/use-movie-filter";
import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";
import { EmptyState } from "@/components/shared/states/empty-state";

export function TradingPage() {
  const {
    search,
    genre,
    sort,
    // page,

    setSearch,
    setGenre,
    setSort,
    // setPage,
  } = useMovieFilter();

  const { data, isLoading, error } = useGetTrendingMoviesQuery();

  if (isLoading) {
    return <LoadingState text="Loading movies..." />;
  }

  if (error) {
    return <ErrorState message="Unable to load movies." />;
  }

  const movies = data?.data ?? [];
  console.log(data)
  return (
    <Container>
      <main className="space-y-10 py-10">
        <MovieFilter
          search={search}
          genre={genre}
          sort={sort}
          onSearchChange={setSearch}
          onGenreChange={setGenre}
          onSortChange={setSort}
        />

        {movies.length ? (
          <>
            <MovieGrid movies={movies} />

            {/* {movies?.pagination?.totalPage > 1 && (
              <MoviePagination
                page={page}
                totalPages={data?.data.pagination.totalPage ?? 1}
                hasNextPage={data?.data.pagination.hasNextPage ?? false}
                hasPreviousPage={data?.data.pagination.hasPreviousPage ?? false}
                onPageChange={setPage}
              />
            )} */}
          </>
        ) : (
          <EmptyState
            title="No Movies Found"
            description="Try changing your search or filters."
          />
        )}
      </main>
    </Container>
  );
}
