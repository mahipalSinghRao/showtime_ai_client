"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

import { Container } from "@/components/layout/container";

import { Movie } from "../api/movie.types";
import { MoviePoster } from "../components/movie-poster";
import { RatingBadge } from "../components/rating-badge";
import { MovieActions } from "./movie-actions";

interface MovieHeaderProps {
  movie: Movie;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export function MovieHeader({ movie }: MovieHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGE_URL}${movie.posterPath})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[650px] flex-col items-end gap-10 pt-32 pb-16 md:flex-row">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="w-full max-w-[280px] shrink-0"
          >
            <MoviePoster
              posterPath={movie.posterPath}
              title={movie.title}
              priority
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex max-w-3xl flex-1 flex-col justify-end"
          >
            <div className="mb-5">
              <RatingBadge rating={movie.voteAverage} />
            </div>

            <h1 className="text-4xl leading-tight font-bold md:text-6xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="text-muted-foreground mt-4 text-xl italic">
                {movie.tagline}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-primary/15 text-primary rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="text-muted-foreground mt-8 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" />

                <span>{new Date(movie.releaseDate).getFullYear()}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="size-4" />

                <span>{movie.runtime} min</span>
              </div>

              <span className="rounded-lg border px-3 py-1">
                {movie.originalLanguage.toUpperCase()}
              </span>
            </div>

            <MovieActions trailerKey={movie.trailerKey} movieId={movie._id} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
