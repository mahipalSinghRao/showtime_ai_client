import { Skeleton } from "@/components/ui/skeleton";

export function AiLoading() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="grid rounded-3xl border p-5 md:grid-cols-[220px_1fr]"
        >
          <Skeleton className="h-[320px] rounded-2xl" />

          <div className="space-y-4 p-6">
            <Skeleton className="h-8 w-2/3" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-4/5" />

            <Skeleton className="h-24 rounded-xl" />

            <div className="flex gap-3">
              <Skeleton className="h-10 w-32" />

              <Skeleton className="h-10 w-28" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
