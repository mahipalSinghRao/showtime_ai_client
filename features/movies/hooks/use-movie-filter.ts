"use client";

import { useEffect, useState } from "react";

export function useMovieFilter() {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [genre, setGenre] = useState("all");
    const [sort, setSort] = useState("releaseDate");
    const [page, setPage] = useState(1);

    // Debounce Search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    // Reset page when filter changes
    useEffect(() => {
        setPage(1);
    }, [genre, sort]);

    return {
        search,
        debouncedSearch,
        genre,
        sort,
        page,

        setSearch,
        setGenre,
        setSort,
        setPage,
    };
}