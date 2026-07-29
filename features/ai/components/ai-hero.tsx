import { Sparkles } from "lucide-react";

export function AiHero() {
  return (
    <section className="space-y-5 text-center">
      <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
        <Sparkles className="size-4" />
        AI Powered Recommendation
      </div>

      <h1 className="text-4xl font-bold md:text-6xl">
        Discover Your Perfect Movie
      </h1>

      <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
        Describe your mood, favorite genre or the kind of story you're looking
        for. AI will recommend movies from our collection.
      </p>
    </section>
  );
}
