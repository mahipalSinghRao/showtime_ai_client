import { HeroSection } from "@/features/home/sections/hero-section";
import { FeaturedSection } from "@/features/home/components/featured-section";
import { TrendingSection } from "@/features/home/components/trending-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <TrendingSection />
    </>
  );
}
