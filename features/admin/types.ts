export interface SyncMoviePayload {
    source:
    | "trending"
    | "popular"
    | "top_rated"
    | "upcoming"
    | "discover";
    page: number;
}

export interface SyncMovieResponse {
    success: boolean;
    message: string;
    data: {
        inserted: number;
        updated: number;
        skipped?: number;
    };
}