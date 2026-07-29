"use client";

import { Recommendation } from "../types";
import { AiCard } from "./ai-card";

interface AiResultProps {
  recommendations: Recommendation[];
}

export function AiResult({ recommendations }: AiResultProps) {
  if (!recommendations.length) return;
  // console.log(recommendations);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">AI Recommendations</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {recommendations?.map((item) => (
          <AiCard key={item._id} recommendation={item} />
        ))}
      </div>
    </section>
  );
}
