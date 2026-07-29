"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MovieFilterProps {
  search: string;
  genre: string;
  sort: string;

  onSearchChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function MovieFilter({
  search,
  genre,
  sort,
  onSearchChange,
  onGenreChange,
  onSortChange,
}: MovieFilterProps) {
  return (
    <div className="bg-card rounded-2xl border p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Search */}
        <div className="space-y-2">
          <Label>Search Movie</Label>

          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

            <Input
              placeholder="Search movies..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Genre */}
        <div className="space-y-2">
          <Label>Genre</Label>

          <Select value={genre} onValueChange={onGenreChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Genres" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="Action">Action</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Comedy">Comedy</SelectItem>
              <SelectItem value="Drama">Drama</SelectItem>
              <SelectItem value="Fantasy">Fantasy</SelectItem>
              <SelectItem value="Horror">Horror</SelectItem>
              <SelectItem value="Science Fiction">Sci-Fi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <Label>Sort By</Label>

          <Select value={sort} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="releaseDate" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="releaseDate">Latest</SelectItem>
              <SelectItem value="voteAverage">Top Rated</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
