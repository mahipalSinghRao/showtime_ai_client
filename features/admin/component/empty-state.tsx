"use client";

import { Film } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20">
      <Film className="text-muted-foreground mb-4 h-12 w-12" />

      <h3 className="text-lg font-semibold">No Movies Found</h3>

      <p className="text-muted-foreground">Try another search keyword.</p>
    </div>
  );
}
