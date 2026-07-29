"use client";
import { Container } from "@/components/layout/container";
import { MovieGrid } from "@/features/movies/components/movie-grid";
import { useGetWatchlistQuery } from "../api/watchlist.api";
import { ErrorState } from "@/components/shared/states/error-state";
import { LoadingState } from "@/components/shared/states/loading-state";
import { EmptyState } from "@/components/shared/states/empty-state";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export function WatchlistPage() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) {
    return (
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl font-bold">Login Required</h1>

          <p className="text-muted-foreground max-w-md">
            Please login to access your watchlist and save your favorite movies.
          </p>

          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </Container>
    );
  }

  const { data, isLoading, error } = useGetWatchlistQuery(undefined, {
    skip: !isAuthenticated,
  });
  if (isLoading) {
    return <LoadingState text="Loding Watchlist..." />;
  }
  if (error) return <ErrorState message="Unable to load watchlist." />;

  const movies = data?.data?.map((item) => item.movie) ?? [];

  if (!movies.length)
    return (
      <EmptyState
        title="Your Watchlist is Empty"
        description="Start exploring movies and save your favorites."
        action={
          <Button asChild>
            <Link href="/movies">Browse Movies</Link>
          </Button>
        }
      />
    );
  return (
    <Container>
      <main className="py-12">
        <h1 className="mb-8 text-4xl font-bold">My Watchlist</h1>
        <MovieGrid movies={movies} watchlistMode={true} />
      </main>
    </Container>
  );
}
