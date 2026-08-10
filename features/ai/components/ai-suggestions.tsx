"use client";

import { Button } from "@/components/ui/button";

const suggestions = [
  "🚀 Best Sci-Fi Movies",
  "😂 Funny Comedy",
  "😱 Horror Night",
  "🧠 Mind Bending",
  "💔 Emotional Drama",
  "⚔️ Action Adventure",
  "👨‍👩‍👧 Family Movies",
  "❤️ Romantic Movies",
];

interface AiSuggestionsProps {
  onSelect: (suggestion: string) => void;
}

export function AiSuggestions({ onSelect }: AiSuggestionsProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-center text-xl font-bold text-blue-500">
        Quick Suggestions
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {suggestions.map((item) => (
          <Button
            key={item}
            variant="outline"
            className="w-44 rounded-full"
            onClick={() => onSelect(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </section>
  );
}
