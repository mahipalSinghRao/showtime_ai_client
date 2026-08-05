"use client";

import Image from "next/image";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface Movie {
  _id: string;
  title: string;
  posterPath: string;
  genres: string[];
  voteAverage: number;
  releaseDate: string;
}

interface MovieRowProps {
  movie: Movie;
}

export function MovieRow({ movie }: MovieRowProps) {
 
  return (
    <TableRow>
      <TableCell>
        <Image
          src={movie?.posterPath}
          alt={movie?.title}
          width={60}
          height={90}
          className="rounded-md object-cover"
        />
      </TableCell>

      <TableCell className="font-medium">{movie.title}</TableCell>

      <TableCell>
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary">
              {genre}
            </Badge>
          ))}
        </div>
      </TableCell>

      <TableCell>{movie.voteAverage.toFixed(1)}</TableCell>

      <TableCell>{new Date(movie.releaseDate).getFullYear()}</TableCell>

      <TableCell>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>

          <Button variant="destructive" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
