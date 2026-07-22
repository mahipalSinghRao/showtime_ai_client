import { Clapperboard } from "lucide-react";

import { Container } from "@/components/layout/container";

import { FooterLinks } from "./footer-links";
import { FooterSocial } from "./footer-social";
import { QUICK_LINKS, RESOURCES } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-xl">
                <Clapperboard className="size-5" />
              </div>

              <span className="text-xl font-bold">ShowTime AI</span>
            </div>

            <p className="text-muted-foreground text-sm leading-7">
              Discover movies intelligently using AI-powered recommendations
              with a premium cinematic experience.
            </p>

            <FooterSocial />
          </div>

          <FooterLinks title="Quick Links" links={QUICK_LINKS} />

          <FooterLinks title="Resources" links={RESOURCES} />

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase">Built With</h3>

            <p className="text-muted-foreground text-sm leading-7">
              Next.js 16, React 19, TypeScript, Tailwind CSS, Shadcn UI,
              Express.js, MongoDB, Redis, BullMQ and AI.
            </p>
          </div>
        </div>

        <div className="border-border text-muted-foreground border-t py-6 text-center text-sm">
          © {new Date().getFullYear()} ShowTime AI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
