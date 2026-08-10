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
  const [prompt, setPrompt] = useState("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  return (
    <Container>
      <div className="mx-auto flex w-full max-w-6xl flex-col space-y-12 py-16">
        <AiHero />

        <div className="mt-2 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-2/3">
            <AiInput
              prompt={prompt}
              setPrompt={setPrompt}
              recommendMovies={recommendMovies}
              isLoading={isLoading}
              onSuccess={setRecommendations}
            />
          </div>

          <div className="w-full lg:w-1/3">
            <AiSuggestions onSelect={setPrompt} />
          </div>
        </div>

        {isLoading && <AiLoading />}

        <AiResult recommendations={recommendations} />
      </div>
    </Container>
  );
}
