"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroNavigationProps {
  total: number;
  current: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
}

export function HeroNavigation({
  total,
  current,
  onNext,
  onPrevious,
  onSelect,
}: HeroNavigationProps) {
  return (
    <>
      {/* Left */}
      <Button
        size="icon"
        variant="secondary"
        onClick={onPrevious}
        className="absolute top-1/2 left-6 z-30 hidden h-12 w-12 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex"
      >
        <ChevronLeft />
      </Button>

      {/* Right */}
      <Button
        size="icon"
        variant="secondary"
        onClick={onNext}
        className="absolute top-1/2 right-6 z-30 hidden h-12 w-12 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex"
      >
        <ChevronRight />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-primary w-10" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </>
  );
}
