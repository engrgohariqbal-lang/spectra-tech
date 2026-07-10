"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Industrial facility - SpectraTech Solutions Pakistan",
    title: "Materials Analysis & Technical\nCleanliness Inspection",
    subtitle:
      "We manufacture analytical instruments and services that make the invisible accessible, so you can make the impossible come true.",
    cta: { label: "THIS IS OUR STORY", href: "/about" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Precision analytical instruments - OES Spectrometer Pakistan",
    title: "Advanced OES & XRF\nTechnology For Pakistan",
    subtitle:
      "SpectraTech Solutions is Pakistan's authorized distributor for Wuxi Jinyibo Instrument Technology, delivering precision to every lab.",
    cta: { label: "EXPLORE PRODUCTS", href: "/products" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Engineers working on OES machines - SpectraTech after-sales service",
    title: "Dedicated After-Sales\nService & Support",
    subtitle:
      "Engineer-led installation, calibration, training, and maintenance — ensuring your instruments perform at their best, every day.",
    cta: { label: "CONTACT US", href: "/contact" },
  },
];

export function HeroCarousel() {
  const [plugin] = React.useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  const [current, setCurrent] = React.useState(0);

  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Carousel
        plugins={[plugin]}
        className="w-full h-full"
        opts={{ loop: true, duration: 30 }}
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => setCurrent(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slides) => (
            <CarouselItem
              key={slides.id}
              className="relative h-full basis-full"
            >
              <Image
                src={slides.image}
                alt={slides.alt}
                fill
                priority={slides.id === 1}
                className="object-cover z-0"
              />
              {/* Dark gradient overlay from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* Persistent Overlay Text */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-2xl space-y-4 md:space-y-5 pointer-events-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] drop-shadow-lg whitespace-pre-line">
              {slides[current]?.title || slides[0].title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg text-slate-250 max-w-xl leading-relaxed">
              {slides[current]?.subtitle || slides[0].subtitle}
            </p>
            <div className="pt-2 md:pt-4">
              <Link
                href={slides[current]?.cta.href || "/about"}
                className="inline-block border-2 border-white text-white font-bold tracking-widest text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3.5 hover:bg-white hover:text-primary transition-all duration-300"
              >
                {slides[current]?.cta.label || "THIS IS OUR STORY"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
