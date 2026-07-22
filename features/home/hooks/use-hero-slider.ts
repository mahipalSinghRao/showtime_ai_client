"use client";

import { useEffect, useMemo, useState } from "react";

import { Movie } from "@/features/movies/api/movie.types";

export function useHeroSlider(movies: Movie[]) {
    // Random movie on first load
    const initialIndex = useMemo(() => {
        if (!movies.length) return 0;

        return Math.floor(Math.random() * movies.length);
    }, [movies]);

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (movies.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % movies.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [movies.length, isPaused]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
    };

    const previous = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? movies.length - 1 : prev - 1,
        );
    };

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    return {
        currentMovie: movies[currentIndex],
        currentIndex,

        next,
        previous,
        goTo,

        pause: () => setIsPaused(true),
        resume: () => setIsPaused(false),
    };
}