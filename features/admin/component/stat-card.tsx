import { ReactNode } from "react";

interface Props {
  title: string;
  value: number | string;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: Props) {
  return (
    <div className="bg-card rounded-xl border p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="bg-primary/10 rounded-lg p-3">{icon}</div>
      </div>
    </div>
  );
}
