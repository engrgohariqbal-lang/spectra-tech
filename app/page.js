import { HeroCarousel } from "@/components/hero-carousel";
import { StatsStrip } from "@/components/stats-strip";
import { TrustedClients } from "@/components/trusted-clients";
import { ExploreProducts } from "@/components/explore-products";
import { OurSolutions } from "@/components/our-solutions";
import { CustomersSay } from "@/components/customers-say";
import { CustomerShowcase } from "@/components/customer-showcase";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <StatsStrip />
      <TrustedClients />
      <ExploreProducts />
      <OurSolutions />
      <CustomersSay />
      <CustomerShowcase />
    </>
  );
}
