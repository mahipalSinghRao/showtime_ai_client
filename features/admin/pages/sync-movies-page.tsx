"use client";

import { SyncMovieForm } from "../component/sync-form";

export function SyncMoviesPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Sync Movies</h1>

        <p className="text-muted-foreground mt-2">
          Import movies directly from TMDB into your database.
        </p>
      </div>

      <SyncMovieForm />
    </div>
  );
}
