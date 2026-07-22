"use client";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

import { Movie } from "../../api/movie.types";

interface MovieOverviewProps {
  movie: Movie;
}

export function MovieOverview({ movie }: MovieOverviewProps) {
  const director =
    movie.crew.find((person) => person.job === "Director")?.name ?? "Unknown";

  const productionCompanies =
    movie.productionCompanies?.flat()?.join(", ") || "Unknown";

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Overview</h2>

              <p className="text-muted-foreground leading-8">
                {movie.overview}
              </p>
            </div>

            <Separator />

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Director</h3>

                <p className="text-muted-foreground">{director}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Production</h3>

                <p className="text-muted-foreground">{productionCompanies}</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 rounded-2xl border p-6">
            <div>
              <p className="text-muted-foreground text-sm">Language</p>

              <p className="mt-1 font-semibold">
                {movie.originalLanguage.toUpperCase()}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-muted-foreground text-sm">Budget</p>

              <p className="mt-1 font-semibold">
                ${movie.budget.toLocaleString()}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-muted-foreground text-sm">Revenue</p>

              <p className="mt-1 font-semibold">
                ${movie.revenue.toLocaleString()}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-muted-foreground text-sm">IMDb</p>

              <a
                href={`https://www.imdb.com/title/${movie.imdbId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-1 block hover:underline"
              >
                View on IMDb
              </a>
            </div>

            <Separator />

            <div>
              <p className="text-muted-foreground text-sm">Homepage</p>

              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-1 block break-all hover:underline"
              >
                Official Website
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
