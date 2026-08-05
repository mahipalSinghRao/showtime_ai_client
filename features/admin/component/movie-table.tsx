"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
} from "@/components/ui/table";

import { MovieRow } from "./movie-row";
import { MovieSkeleton } from "./movie-skeleton";
import { EmptyState } from "./empty-state";

interface Props {
  movies: any[];
  loading: boolean;
}

export function MovieTable({ movies, loading }: Props) {

  if (loading) {
    return <MovieSkeleton />;
  }

  if (!movies.length) {
    return <EmptyState />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Poster</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Release</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {movies?.map((movie) => (
          <MovieRow key={movie._id} movie={movie} />
        ))}
      </TableBody>
    </Table>
  );
}
