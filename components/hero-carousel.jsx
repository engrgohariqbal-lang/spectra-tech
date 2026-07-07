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
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
              
              <div className="absolute inset-0 bg-slate-800">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Carousel controls - visible on md+ screens */}
        <div className="hidden md:block z-20 relative">
          <CarouselPrevious className="left-8 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md" />
          <CarouselNext className="right-8 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md" />
        </div>
      </Carousel>

      {/* Persistent Overlay Text */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6 pointer-events-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-balance">
              Powering Precision Analysis <br className="hidden md:block" />
              <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">— In Pakistan and Beyond</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              SpectraTech Solutions is the authorized Pakistan distributor for Wuxi Jinyibo Instrument Technology — bringing OES, XRF, EDXRF, ICP and Carbon-Sulfur analyzers to Pakistan&apos;s steel, foundry, metal, mining, power and chemical industries, with local sales, installation and after-sales service.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-7 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_0px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-1">
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
