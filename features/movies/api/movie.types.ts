import { ApiResponse } from "@/types/api";

export interface Cast {
    id: number;
    name: string;
    character: string;
    profilePath: string | null;
}

export interface Crew {
    id: number;
    name: string;
    job: string;
    department: string;
}

export interface Movie {
    _id: string;
    tmdbId: number;
    title: string;
    slug: string;
    overview: string;
    tagline: string;
    posterPath: string;
    trailerKey: string;
    releaseDate: string;
    runtime: number;
    voteAverage: number;
    budget: number;
    revenue: number;
    imdbId: string;
    homepage: string;
    originalLanguage: string;
    genres: string[];
    cast: Cast[];
    crew: Crew[];
    isFeatured: boolean;
    isTrending: boolean;
}

export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface MoviesResponse {
    movie: Movie[];
    pagination: Pagination;
}

export interface MovieStats {
    totalMovies: number;
    featuredMovies: number;
    averageRating: number;
}

export type GetMoviesResponse = ApiResponse<MoviesResponse>;

export type GetMovieResponse = ApiResponse<Movie>;

export type GetTrendingResponse = ApiResponse<Movie[]>;

export type GetFeaturedResponse = ApiResponse<Movie[]>;

export type GetSimilarResponse = ApiResponse<Movie[]>;

export type MovieStatsResponse = ApiResponse<MovieStats>;