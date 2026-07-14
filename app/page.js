import { HeroCarousel } from "@/components/homeComponents/hero-carousel";
import { AboutUsSection } from "@/components/aboutComponents/about-us-section";
import { StatsStrip } from "@/components/aboutComponents/stats-strip";
import { ExploreProducts } from "@/components/homeComponents/explore-products";
import { OurSolutions } from "@/components/homeComponents/our-solutions";
import { CustomersSay } from "@/components/homeComponents/customers-say";
import { CustomerShowcase } from "@/components/homeComponents/customer-showcase";

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
