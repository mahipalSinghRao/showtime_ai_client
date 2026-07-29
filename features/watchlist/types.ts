import { Movie } from "../../features/movies/api/movie.types";

export interface WatchlistItem {
    _id: string;
    movie: Movie;
    createdAt: string;
}

export interface WatchlistResponse {
    statusCode: number;
    success: boolean;
    message: boolean
    data: WatchlistItem[];
}

