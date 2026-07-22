"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Info, Play } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import { Movie } from "@/features/movies/api/movie.types";

interface HeroContentProps {
  movie: Movie;
}

export function HeroContent({ movie }: HeroContentProps) {
  return (
    <Container className="relative z-20 flex h-full items-center">
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
        className="max-w-2xl space-y-6"
      >
        <span className="bg-primary/20 text-primary rounded-full px-4 py-2 text-sm font-medium">
          Featured Movie
        </span>

        <h1 className="text-5xl font-bold md:text-7xl">{movie.title}</h1>

        {movie.tagline && (
          <p className="text-xl text-gray-300 italic">"{movie.tagline}"</p>
        )}

        <p className="line-clamp-4 text-lg text-gray-300">{movie.overview}</p>

        <div className="flex flex-wrap gap-4">
          <Button size="lg">
            <Play className="mr-2 h-5 w-5 fill-current" />
            Watch Trailer
          </Button>

          <Button asChild variant="secondary" size="lg">
            <Link href={`/movies/${movie._id}`}>
              <Info className="mr-2 h-5 w-5" />
              More Details
            </Link>
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}
