import { HeroCarousel } from "@/components/hero-carousel";
import { AboutUsSection } from "@/components/about-us-section";
import { StatsStrip } from "@/components/stats-strip";
import { ExploreProducts } from "@/components/explore-products";
import { OurSolutions } from "@/components/our-solutions";
import { CustomersSay } from "@/components/customers-say";
import { CustomerShowcase } from "@/components/customer-showcase";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUsSection />
      <StatsStrip />
      <ExploreProducts />
      <OurSolutions />
      <CustomersSay />
      <CustomerShowcase />
    </>
  );
}
