import { Container } from "@/components/layout/container";

import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Container className="flex h-screen items-center justify-center">
        <ThemeToggle />
      </Container>
    </main>
  );
}
