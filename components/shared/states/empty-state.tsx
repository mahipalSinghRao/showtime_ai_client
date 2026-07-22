import { Film } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-3">
      <Film className="text-muted-foreground size-12" />

      <h3 className="text-lg font-semibold">{title}</h3>

      {description && (
        <p className="text-muted-foreground text-center">{description}</p>
      )}
    </div>
  );
}
