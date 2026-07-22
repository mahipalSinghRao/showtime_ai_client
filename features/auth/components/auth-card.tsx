import { ReactNode } from "react";

import { Clapperboard } from "lucide-react";

import { Card } from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <Card className="border-border/60 bg-card/60 space-y-8 p-8 backdrop-blur-xl">
      <div className="space-y-4 text-center">
        <div className="bg-primary text-primary-foreground mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
          <Clapperboard className="size-7" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </div>

      {children}
    </Card>
  );
}
