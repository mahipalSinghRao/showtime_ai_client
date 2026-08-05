"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MovieSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function MovieSearch({ value, onChange }: MovieSearchProps) {
  return (
    <div className="relative max-w-sm">
      <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />

      <Input
        placeholder="Search movie..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
