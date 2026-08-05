"use client";

import { Film, Flame, Star, BarChart3 } from "lucide-react";

import { LoadingState } from "@/components/shared/states/loading-state";
import { ErrorState } from "@/components/shared/states/error-state";

import { StatCard } from "@/features/admin/component/stat-card";
import { useGetDashboardStatsQuery } from "@/features/admin/api/admin.api";

export default function DashboardPage() {
  const { data, isLoading, error } = useGetDashboardStatsQuery();

  if (isLoading) return <LoadingState text="Loading dashboard..." />;

  if (error) return <ErrorState message="Unable to load dashboard." />;

  const stats = data?.data;
  const rating = stats.averageRating.toFixed(1);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Movies"
          value={stats.totalMovies}
          icon={<Film className="h-6 w-6" />}
        />

        <StatCard
          title="Featured Movies"
          value={stats.featuredMovies}
          icon={<Star className="h-6 w-6" />}
        />

        <StatCard
          title="Trending Movies"
          value={stats.trendingMovies}
          icon={<Flame className="h-6 w-6" />}
        />

        <StatCard
          title="Average Rating"
          value={rating}
          icon={<BarChart3 className="h-6 w-6" />}
        />
      </div>
    </div>
  );
}
