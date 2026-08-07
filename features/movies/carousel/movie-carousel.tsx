"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

import { Movie } from "../api/movie.types";
import { MovieCard } from "../components/movie-card";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

export function MovieCarousel({ title, movies }: MovieCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-12">
      <Container>
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="size-5" />
            </Button>

            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {movies?.map((movie) => (
              <div
                key={movie._id}
                className="min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_23%] xl:flex-[0_0_20%]"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
