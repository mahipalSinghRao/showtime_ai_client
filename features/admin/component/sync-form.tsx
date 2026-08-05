"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Loader2, RefreshCw } from "lucide-react";

import { TMDB_SOURCES } from "../constants/tmdb-source";
import { useSyncMoviesMutation } from "../api/admin.api";

export function SyncMovieForm() {
  const [source, setSource] = useState("trending");
  const [page, setPage] = useState(1);

  const [syncMovies, { isLoading }] = useSyncMoviesMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await syncMovies({
        source,
        page,
      }).unwrap();

      toast.success(res.message || "Movies synced successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to sync movies");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>TMDB Movie Sync</CardTitle>

        <CardDescription>
          Import movies directly from TMDB into your database.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Source */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Source</label>

            <Select value={source} onValueChange={setSource}>
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>

              <SelectContent>
                {TMDB_SOURCES.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Page */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Page</label>

            <Input
              type="number"
              min={1}
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Sync Movies
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
