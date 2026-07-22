export const env = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
    appName: process.env.NEXT_PUBLIC_APP_NAME!,
    tmdbImageUrl: process.env.NEXT_PUBLIC_TMDB_IMAGE_URL!,
    appEnv: process.env.NEXT_PUBLIC_APP_ENV!,
} as const;