import { Movie } from "../movies/api/movie.types";

export interface AiRequest {
    prompt: string;
}

export interface Recommendation {
    movie: Movie;
    reason: string;
}

export interface AiResponse {
    statusCode: number;
    success: boolean;
    message: string;

    data: {
        recommendations: Recommendation[];
    };
}