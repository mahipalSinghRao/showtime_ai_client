import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_55%)]" />

      {/* Auth Card Container */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </main>
  );
}
