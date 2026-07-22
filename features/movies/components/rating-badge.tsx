import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
}

export function RatingBadge({ rating }: RatingBadgeProps) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-white backdrop-blur w-16 justify-center">
      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />

      <span className="text-xs font-semibold">
        {rating > 0 ? rating.toFixed(1) : "N/A"}
      </span>
    </div>
  );
}
