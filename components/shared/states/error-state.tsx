import { TriangleAlert } from "lucide-react";

interface ErrorStateProps {
  message?: string;
}

export function ErrorState({
  message = "Something went wrong.",
}: ErrorStateProps) {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-3">
      <TriangleAlert className="text-destructive size-12" />

      <h3 className="font-semibold">{message}</h3>
    </div>
  );
}
