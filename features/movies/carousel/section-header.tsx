import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  href?: string;
}

export function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-3xl font-bold">{title}</h2>

      {href && (
        <Link
          href={href}
          className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
        >
          View All
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
