"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { useRecommendMoviesMutation } from "../api/ai.api";
import { Recommendation } from "../types";

interface AiInputProps {
  recommendMovies: any;
  isLoading: boolean;
  onSuccess: (data: Recommendation[]) => void;
}

export function AiInput({
  recommendMovies,
  isLoading,
  onSuccess,
}: AiInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await recommendMovies({
        prompt,
      }).unwrap();

      onSuccess(response.data.recommendations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-card rounded-3xl border p-8 shadow-sm">
      <div className="space-y-6">
        <Textarea
          rows={6}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example:
I'm looking for a mind-bending sci-fi movie with emotional storytelling and great visuals..."
        />

        <div className="flex justify-end">
          <Button size="lg" onClick={handleGenerate} disabled={!prompt.trim()}>
            <Sparkles className="mr-2 size-5" />
            {isLoading ? "Thinking..." : "Recommend Movies"}
          </Button>
        </div>
      </div>
    </section>
  );
}
