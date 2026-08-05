export function getYoutubeEmbedUrl(url: string) {
    try {
        const youtubeUrl = new URL(url);
        const videoId = youtubeUrl.searchParams.get("v")
        if (!videoId) return "";
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } catch {
        return "";
    }
}