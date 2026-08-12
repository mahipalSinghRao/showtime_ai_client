"use client";

import Link from "next/link";
import { Lock } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface LoginRequiredDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginRequiredDialog({
  open,
  onOpenChange,
}: LoginRequiredDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <Lock className="text-primary h-8 w-8" />
          </div>

          <DialogTitle className="text-2xl">Login Required</DialogTitle>

          <DialogDescription>
            Please login to save movies to your watchlist and access
            personalized features.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button asChild className="flex-1">
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
