"use client";

import { useState } from "react";

import { MovieSearch } from "../component/movie-search";
import { MovieTable } from "../component/movie-table";
import { MoviePagination } from "../component/movie-pagination";

import { useGetMoviesQuery } from "@/features/movies/api/movie.api";

export function MoviesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching } = useGetMoviesQuery({
    page,
    limit: 10,
    search,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Movies</h1>

        <p className="text-muted-foreground">
          Manage all movies available in Showtime.
        </p>
      </div>

      {/* Search */}
      <MovieSearch value={search} onChange={setSearch} />

      {/* Table */}
      <MovieTable
        movies={data?.data?.movies ?? []}
        loading={isLoading || isFetching}
      />

      {/* Pagination */}
      <MoviePagination
        currentPage={page}
        totalPages={data?.data?.pagination?.totalPage ?? 1}
        onPageChange={setPage}
      />
    </div>
  );
}
