"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Recommendation } from "../types";
import { useAppSelector } from "@/store/hooks";
import { LoginRequiredDialog } from "@/features/component/login-required-dialog";

interface AiInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  recommendMovies: any;
  isLoading: boolean;
  onSuccess: (data: Recommendation[]) => void;
}

export function AiInput({
  prompt,
  setPrompt,
  recommendMovies,
  isLoading,
  onSuccess,
}: AiInputProps) {
  const [open, setOpen] = useState(false);

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleGenerate = async () => {
    if (!isAuthenticated) {
      setOpen(true);
      return;
    }

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
    <>
      <div className="border-border/60 bg-card focus-within:border-primary/40 w-full rounded-2xl border p-3 shadow-sm transition-all focus-within:shadow-md">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tell me what kind of movie you're looking for..."
          className="min-h-[150px] resize-none border-0 bg-transparent px-3 py-3 text-base shadow-none outline-none focus:border-0 focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none"
          maxLength={500}
        />

        <div className="border-border/50 mt-2 flex flex-col gap-3 border-t pt-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-muted-foreground px-2 text-xs">
            {prompt.length}/500
          </span>

          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={!prompt.trim() || isLoading}
            className="w-full sm:w-auto"
          >
            <Sparkles className="mr-2 size-5" />

            {isLoading ? "Thinking..." : "Recommend Movies"}
          </Button>
        </div>
      </div>

      <LoginRequiredDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
