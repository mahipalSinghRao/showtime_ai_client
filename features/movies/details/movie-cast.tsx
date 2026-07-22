"use client";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

import { Movie } from "../api/movie.types";

interface MovieCastProps {
  movie: Movie;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w185";

export function MovieCast({ movie }: MovieCastProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Cast</h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft className="size-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {movie.cast.map((actor) => (
              <div
                key={actor.id}
                className="min-w-0 flex-[0_0_55%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_18%] xl:flex-[0_0_15%]"
              >
                <div className="bg-card overflow-hidden rounded-2xl border">
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={`${IMAGE_URL}${actor.profilePath}`}
                      alt={actor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1 p-4">
                    <h3 className="line-clamp-1 font-semibold">{actor.name}</h3>

                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {actor.character}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
