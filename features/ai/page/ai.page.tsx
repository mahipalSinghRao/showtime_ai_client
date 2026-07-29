"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";

import { AiHero } from "../components/ai-hero";
import { AiInput } from "../components/ai-input";
import { AiSuggestions } from "../components/ai-suggestions";
import { AiLoading } from "../components/ai-loading";
import { AiResult } from "../components/ai-result";

import { Recommendation } from "../types";
import { useRecommendMoviesMutation } from "../api/ai.api";

export function AiPage() {
  const [recommendMovies, { isLoading }] = useRecommendMoviesMutation();

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  return (
    <Container>
      <div className="mx-auto max-w-6xl space-y-12 py-16">
        <AiHero />

        <AiInput
          recommendMovies={recommendMovies}
          isLoading={isLoading}
          onSuccess={setRecommendations}
        />

        <AiSuggestions />

        {isLoading && <AiLoading />}

        <AiResult recommendations={recommendations} />
      </div>
    </Container>
  );
}
