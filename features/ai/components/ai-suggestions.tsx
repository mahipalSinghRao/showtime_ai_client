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

export function AiSuggestions() {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Quick Suggestions</h3>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <Button key={item} variant="outline" className="rounded-full">
            {item}
          </Button>
        ))}
      </div>
    </section>
  );
}
