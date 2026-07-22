import { MovieDetails } from "@/features/movies/details/movie-details";

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  

  return <MovieDetails id={id} />;
}
