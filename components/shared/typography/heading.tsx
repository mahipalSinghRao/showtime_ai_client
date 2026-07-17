import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

const style = {
  1: "text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-4xl font-bold tracking-tight",
  3: "text-3xl font-semibold",
  4: "text-2xl font-semibold",
};

export function Heading({ level = 1, className, children }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return <Tag className={cn(style[level], className)}>{children}</Tag>;
}
