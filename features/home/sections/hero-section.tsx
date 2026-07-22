"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useGetFeaturedMoviesQuery } from "@/features/movies/api/movie.api";

import { HeroContent } from "../components/hero-content";
import { HeroNavigation } from "../components/hero-navigation";
import { useHeroSlider } from "../hooks/use-hero-slider";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export function HeroSection() {
  const { data, isLoading } = useGetFeaturedMoviesQuery();

  const movies = data?.data ?? [];

  const { currentMovie, currentIndex, next, previous, goTo, pause, resume } =
    useHeroSlider(movies);

  if (isLoading || !currentMovie) {
    return null;
  }

  return (
    <section
      className="group relative h-[85vh] overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMovie._id}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${IMAGE_URL}${currentMovie.posterPath})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          <HeroContent movie={currentMovie} />
        </motion.div>
      </AnimatePresence>

      <HeroNavigation
        total={movies.length}
        current={currentIndex}
        onNext={next}
        onPrevious={previous}
        onSelect={goTo}
      />
    </section>
  );
}
