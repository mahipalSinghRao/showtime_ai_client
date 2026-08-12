"use client";

import { Button } from "@/components/ui/button";

const suggestions = [
  {
    label: "🚀 Best Sci-Fi Movies",
    prompt: "Best sci-fi movies",
  },
  {
    label: "😂 Funny Comedy",
    prompt: "Funny comedy movies",
  },
  {
    label: "😱 Horror Night",
    prompt: "Best horror movies for a scary night",
  },
  {
    label: "🧠 Mind Bending",
    prompt: "Mind-bending movies with complex stories",
  },
  {
    label: "💔 Emotional Drama",
    prompt: "Emotional drama movies with powerful storytelling",
  },
  {
    label: "⚔️ Action Adventure",
    prompt: "Action adventure movies with exciting stories",
  },
  {
    label: "👨‍👩‍👧 Family Movies",
    prompt: "Family-friendly movies that everyone can enjoy",
  },
  {
    label: "❤️ Romantic Movies",
    prompt: "Romantic movies with a great love story",
  },
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
            key={item.label}
            variant="outline"
            className="w-44 rounded-full"
            onClick={() => onSelect(item.prompt)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
