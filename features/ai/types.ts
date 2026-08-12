import { Movie } from "../movies/api/movie.types";

export interface AiRequest {
    prompt: string;
}

export type Recommendation = Movie & {
    reason: string;
};

export interface AiResponse {
    statusCode: number;
    success: boolean;
    message: string;

    data: {
        recommendations: Recommendation[];
    };
}