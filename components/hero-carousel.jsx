"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/seed/spectratech-hero-1/1600/900",
    alt: "Industrial facility in Pakistan",
    title: "Precision Elemental Analysis",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/spectratech-hero-2/1600/900",
    alt: "Precision analytical instruments installation",
    title: "Advanced OES Technology",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/spectratech-hero-3/1600/900",
    alt: "Engineers working on OES machines",
    title: "Dedicated After-Sales Service",
  },
];

export function HeroCarousel() {
  const [plugin] = React.useState(() => Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-slate-900 overflow-hidden">
      <Carousel
        plugins={[plugin]}
        className="w-full h-full"
        opts={{
          loop: true,
          duration: 40,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative h-full basis-full">
              {/* Background Image Placeholder using div with background since we don't have real images yet. 
                  In a real scenario, use next/image. We will simulate with next/image relying on a solid color fallback if missing. */}
              <div className="absolute inset-0 bg-slate-800">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  className="object-cover opacity-50"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Carousel controls - visible on md+ screens */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 bg-black/30 hover:bg-black/50 text-white border-none" />
          <CarouselNext className="right-8 bg-black/30 hover:bg-black/50 text-white border-none" />
        </div>
      </Carousel>

      {/* Persistent Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 pointer-events-auto bg-black/40 p-8 md:p-12 rounded-xl backdrop-blur-sm border border-white/10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight shadow-sm text-balance">
              Powering Precision Analysis <br className="hidden md:block" />
              <span className="text-accent">— In Pakistan and Beyond</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
              SpectraTech Solutions is the authorized Pakistan distributor for Wuxi Jinyibo Instrument Technology — bringing OES, XRF, EDXRF, ICP and Carbon-Sulfur analyzers to Pakistan&apos;s steel, foundry, metal, mining, power and chemical industries, with local sales, installation and after-sales service.
            </p>
            <div className="pt-4 flex justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                <Link href="/products">
                  Explore Our Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
