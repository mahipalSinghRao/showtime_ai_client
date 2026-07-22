"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export function CarouselButtons({ onPrev, onNext }: Props) {
  return (
    <div className="flex gap-2">
      <Button size="icon" variant="outline" onClick={onPrev}>
        <ChevronLeft className="size-5" />
      </Button>

      <Button size="icon" variant="outline" onClick={onNext}>
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
}
